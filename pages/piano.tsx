import {useState, useEffect} from 'react'
import {Howl, Howler} from "howler";

const Piano = () => {
    const [style, setStyle] = useState(true);
    const undoKey = () => {
        setStyle(true)
    }
    const note = (src: string) =>{
        setStyle(false);
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play();
        const timeOut = setTimeout(undoKey,200);
    }
    useEffect(()=>{
        document.addEventListener("keydown", () => {
            note("https://www.mboxdrive.com/piano-g-6200.mp3")
        })
    }, [])
    const unclick: string = "h-full bg-white border-2 border-blue-100 rounded-b-md w-12"
    const clicked: string = "h-full bg-gray-300 border-2 border-blue-100 rounded-b-md w-12"
    return (
        <main id="piano_main" className = "flex flex-col justify-end h-screen">
            <div className="flex p-1 h-1/2 bg-gray-100">
                <div className = {(style) ? unclick : clicked} onClick={()=>{note("https://www.mboxdrive.com/piano-g-6200.mp3")}}></div>
                {/*<div className = {(style) ? unclick : clicked} onClick={()=>{note("https://www.mboxdrive.com/piano-g-6200.mp3")}}></div>*/}
                {/*<div className = {(style) ? unclick : clicked} onClick={()=>{note("https://www.mboxdrive.com/piano-g-6200.mp3")}}></div>*/}
                {/*<div className = {(style) ? unclick : clicked} onClick={()=>{note("https://www.mboxdrive.com/piano-g-6200.mp3")}}></div>*/}
            </div>
        </main>
    );
};

export default Piano;