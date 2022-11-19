import React, {useEffect, useState} from 'react';
import {Howl, Howler} from "howler";

const Key = ({voice}) => {
    const [style, setStyle] = useState(true);
    const undoKey = () => {
        setStyle(true)
    }
    const note = (src: string) =>{
        setStyle(false);
        console.log(src)
        const sound = new Howl({
            src,
            html5: true,
            format: ['mp3']
        });
        sound.play();
        console.log(src)
        const timeOut = setTimeout(undoKey,200);
    }
    // useEffect(()=>{
    //     document.addEventListener("keydown", () => {
    //         note(voice)
    //     })
    // }, [])

    const unClick: string = "cursor-pointer h-full bg-white shadow-[inset_0_-4px_6px_rgba(0,0,0,0.8)] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] border-black rounded-b-md w-12"
    const clicked: string = "cursor-pointer h-full bg-white shadow-[inset_0_-4px_12px_rgba(0,0,0,0.9)] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] border-black rounded-b-md w-12"
    return (
        <div className = {(style) ? unClick : clicked} onClick={()=>{note(voice)}}>
        </div>
    );
};

export default Key;