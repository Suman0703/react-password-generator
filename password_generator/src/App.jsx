import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(true)
  const [password, setpassword] = useState("")
  const [copied, setCopied] = useState(false)


  //useRef hook 
  const passwordref = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str += "0123456789"
    }
    if (char) {
      str += "~!#$%^&*()_+{}?><:/.|"
    }

    for (let i = 0; i < length; i++) {
      const character = Math.floor(Math.random() * str.length)
      pass += str.charAt(character)
    }

    setpassword(pass)
  }, [length, number, char])

  const copypass = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [password])


  useEffect(() => {
    passwordGen()
  }, [passwordGen])

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">

        <h1 className="text-3xl font-bold text-center text-white tracking-wide">
          🔐 Password Generator
        </h1>

        <div className="bg-slate-700 p-4 rounded-xl flex flex-col gap-3">
          <h2 className="text-sm uppercase tracking-wider text-slate-300 text-center">
            Generated Password
          </h2>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 px-4 py-2 rounded-full outline-none text-black font-medium bg-slate-100"
              ref={passwordref}
            />

            <button
              className={`px-4 py-2 rounded-full text-white font-semibold transition ${copied ? "bg-green-600" : "bg-blue-500 hover:bg-blue-700"}`}
              onClick={copypass}
            >
              {copied ? "Copied" : "Copy"}
            </button>

          </div>
        </div>

        <div className="flex gap-4 flex-row">

          <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between text-slate-300 text-sm">
              <span>Password Length</span>
              <span className="font-semibold">{length}</span>
            </div>

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-blue-500"
              onChange={(e) => setlength(Number(e.target.value))}
            />

            <label className="text-xs text-slate-400">
              Length : {length}
            </label>
          </div>

          <div className="flex flex-col gap-3 justify-end text-slate-200">

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={number}
                className="w-4 h-4 accent-blue-500"
                onChange={() => setnumber(prev => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={char}
                className="w-4 h-4 accent-blue-500"
                onChange={() => setchar(prev => !prev)}
              />
              Character
            </label>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App
