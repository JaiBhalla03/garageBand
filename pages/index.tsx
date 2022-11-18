import {Fragment, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import piano from "../Images/piano.png"
import drumset from "../Images/drumset.png";
import {motion} from "framer-motion"
import {Howl, Howler} from "howler";


export default function Home() {
    const SoundPlay = (src:string) =>{
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play();
    }

  return (
      <main className="h-screen pb-4 pt-10 pl-10 pr-10" id="home_main">
          <Fragment>
              <title>
                  Garage band
              </title>
              <div className="h-full flex flex-col justify-between">
                  <div className="p-10 font-mono text-blue-300 text-6xl font-extrabold text-shadow-sm">
                      The Garage Band
                  </div>
                  <div className="flex justify-between">
                      <motion.div
                          whileTap={{scale: 0.75}}
                          className="relative ease-in-out duration-100 inline-block hover:scale-110"
                          onClick={() => {SoundPlay("https://www.mboxdrive.com/drum.mp3")}}
                      >
                          <Link href="/drumset">
                              <Image
                                  src={drumset}
                                  width={300}
                                  height={300}
                                  alt=""
                                  className="grayscale hover:grayscale-0"
                              />
                          </Link>
                      </motion.div>
                      <motion.div
                          whileTap={{scale: 0.75}}
                          className="relative ease-in-out duration-100 inline-block hover:scale-110"
                          onClick={() => {SoundPlay("https://www.mboxdrive.com/piano.mp3")}}
                      >
                          <Link href="/piano">
                              <Image
                                  src={piano}
                                  width={300}
                                  height={300}
                                  alt=""
                                  className="grayscale hover:grayscale-0"
                              />
                          </Link>
                      </motion.div>
                  </div>
              </div>

          </Fragment>
      </main>

  )
}
