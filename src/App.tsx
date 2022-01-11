import React, { useState } from 'react'
import './App.css'
import Chessboard from 'chessboardjsx'
import { ChessInstance, ShortMove } from 'chess.js'
import {
  BeakerIcon,
  ChatIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  InformationCircleIcon,
  KeyIcon,
  ShareIcon,
  UserIcon,
} from '@heroicons/react/solid'
import Info from './Info'

const Chess = require('chess.js')

const App: React.FC = () => {
  const [chess] = useState<ChessInstance>(
    new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
  )

  const [fen, setFen] = useState(chess.fen())

  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves()

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)]
          chess.move(computerMove)
          setFen(chess.fen())
        }
      }, 300)

      setFen(chess.fen())
    }
  }

  return (
    <div>
      <div className='header'>
        <p className='title'>CHESSSSSSSSSHU</p>
        <a href='/Info.js'>
          <UserIcon className='btn' />
        </a>
        <a href='/Info.js'>
          <ChatIcon className='btn' />
        </a>
        <a href='/chat.js'>
          <KeyIcon className='btn' />
        </a>
        <a href='/share.js'>
          <ShareIcon className='btn' />
        </a>
      </div>
      <div className='board'>
        <Chessboard
          width={500}
          position={fen}
          onDrop={(move) =>
            handleMove({
              from: move.sourceSquare,
              to: move.targetSquare,
              promotion: 'q',
            })
          }
        />
        <div>
          <div className=''>
            <a href='/Info.js'>
              <InformationCircleIcon className='btn' />
            </a>
            <div className=''>
              <img
                className='img'
                src=' http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ0i8e50qgapjplD4B12bHCrschqEsqAJnoIRmkmTGwuQD3ey5qUCC9N2D6R3gH'
                alt=''
              />
              <p className='miniheader'>Playing as White</p>
            </div>
          </div>
          <div className='happysad'>
            <EmojiHappyIcon className='btnhappy' />
            <EmojiSadIcon className='btnsad' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
