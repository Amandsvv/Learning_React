import { useState , useCallback, useEffect, useRef} from 'react'
export default function PasswordGenerator() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState("")

    //useRef Hook
    let passwordRef = useRef(null)

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str+="0123456789"
        if(characterAllowed) str+="!@#$%^&*()_-+=~`{}[]?/\|<>,."

        for(let i = 1; i <= length; i++){
            let char = Math.floor(Math.random()*str.length);
            pass += str[char]
        }

        setPassword(pass);

    }, [length, numberAllowed, characterAllowed]);

    const copyPassToClipBoard = useCallback(() => {
        passwordRef.current.select()
        window.navigator.clipboard.writeText(password)
    }, [password]);

    useEffect(() => {passwordGenerator()},[length, numberAllowed, characterAllowed])
    return (
        <>
            <div className="h-screen w-full bg-gray-800">
                <h1 className='text-3xl text-center text-white'>Password Generator</h1>
                <div className="w-xl h-2xl mx-auto p-10 rounded-2xl mt-10 bg-gray-600">
                    <div className='grid grid-cols-4 gap-0'>
                        <input 
                        type="text"
                        value={password}
                        className='bg-white border col-span-3 rounded-l-xl p-3 outline-none'
                        readOnly
                        placeholder='Password'
                        ref={passwordRef}
                         />
                        <button
                            onClick={copyPassToClipBoard} 
                            className='col-span-1 bg-blue-600 text-white rounded-r-xl border border-black cursor-pointer'>Copy</button>
                    </div>
                    <div className='mt-5 flex justify-around'>
                        <input min={8} max={30} value={length} className='cursor-pinter' onChange={(e) => {setLength(e.target.value)}} type="range" />
                        <label >Length: {length}</label>
                        <div className='flex gap-3'>
                            <input 
                                className='cursor-pointer' 
                                type="checkbox"
                                defaultChecked={numberAllowed}
                                id='numberInput'
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev)
                                }}
                            />
                            <label className='cursor-pointer' htmlFor='numberInput'>Number</label>
                        </div>
                        <div className='flex gap-3'>
                            <input 
                                className='cursor-pointer' 
                                type="checkbox"
                                defaultChecked={characterAllowed}
                                id='characterInput'
                                onChange={() => {
                                    setCharacterAllowed((prev) => !prev)
                                }} 
                            />
                            <label className='cursor-pointer' htmlFor='characterInput'>Character</label>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}