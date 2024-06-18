import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const paswordRef = useRef(null);

  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState("");

  const passwordGenerator = useCallback(() => {
    let generatedPass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_-+=[]{}|;:',./<>?";

    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      generatedPass += char;
    }

    setPass(generatedPass);
  }, [length, numAllow, charAllow, setPass]);

  useEffect(passwordGenerator, [
    length,
    numAllow,
    charAllow,
    passwordGenerator,
  ]);

  useEffect(() => {
    setDisplay("");

    let ci = 0;
    const interval = setInterval(() => {
      if (ci <= pass.length) {
        setDisplay(pass.substring(0, ci));
        ci++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pass]);

  const copy = useCallback(() => {
    paswordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500 p-4">
        <div className="w-full max-w-lg mx-auto shadow-2xl rounded-2xl px-6 py-8 my-8 text-gray-900 bg-white dark:bg-gray-800 dark:text-gray-200 transform transition duration-500">
          <h1 className="text-3xl font-bold text-center py-4 mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
            Password Generator
          </h1>
          <div className="flex shadow-inner rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
            <input
              type="text"
              value={display}
              className="outline-none w-full py-2 px-4 bg-transparent text-gray-900 dark:text-gray-200"
              placeholder="Password"
              readOnly
              ref={paswordRef}
            />
            <button
              className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors"
              onClick={copy}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-x-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-x-2 text-lg">
                <span>Length: {length}</span>
                <input
                  type="range"
                  min={6}
                  max={30}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => setLength(Number(e.target.value))}
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-x-2 text-lg">
                <input
                  type="checkbox"
                  defaultChecked={numAllow}
                  id="numberInput"
                  onChange={(e) => setNumAllow(e.target.checked)}
                  className="cursor-pointer"
                />
                <span>Numbers</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-x-2 text-lg">
                <input
                  type="checkbox"
                  defaultChecked={charAllow}
                  id="charInput"
                  onChange={(e) => setCharAllow(e.target.checked)}
                  className="cursor-pointer"
                />
                <span>Characters</span>
              </label>
            </div>
          </div>

          <button
            className="outline-none bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 transition duration-200 ease-in-out transform active:scale-95 mt-4 rounded-lg w-full shadow-md"
            onClick={passwordGenerator}
          >
            Regenerate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
