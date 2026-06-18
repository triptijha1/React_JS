import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(includeNumbers) str += "0123456789"
    if(includeSymbols) str += "!@#$%^&*+"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, includeNumbers, includeSymbols, setPassword]) 

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);

    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  },[password])

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeSymbols, generatePassword])

  return (
    <>
      
    <div className="min-h-screen bg-black flex items-start justify-center pt-16">
      
      {copied && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">
          ✅ Copied to Clipboard
        </div>
      )}
      <div className="w-full max-w-xl bg-slate-900 rounded-2xl shadow-2xl p-6">
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex overflow-hidden rounded-xl mb-6">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordRef}
            className="w-full px-4 py-3 bg-white text-gray-700 outline-none"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 font-medium transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          
        </div>

        {/* Length Control */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="w-40 cursor-pointer accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />

          <span className="text-orange-500 font-medium">
            Length: {length}
          </span>
        </div>

        {/* Extra Options */}
        <div className="flex flex-wrap gap-6 text-white">
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              className="accent-blue-500"
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              className="accent-blue-500"
              onChange={() => setIncludeSymbols((prev) => !prev)}
            />
            Symbols
          </label>

        </div>

      </div>
    </div>

    </>
  )
}

export default App;
