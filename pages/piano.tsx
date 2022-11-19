import React, {useState, useEffect} from 'react'
import Key from "../components/Key";
import {notes} from "../utils/sounds.js"
import {Howl} from "howler";


const Piano = () => {

    return (
        <main id="piano_main" className = "flex flex-col justify-end h-screen">
                <div className="flex p-1 h-1/2 bg-gray-100">
                    {
                        notes.map(note=>(
                            <Key voice={note.src}/>
                        ))
                    }
                </div>
        </main>
    );
};

export default Piano;