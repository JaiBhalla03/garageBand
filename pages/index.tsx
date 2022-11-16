import {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import piano from "../Images/piano.png"
import drumset from "../Images/drumset.png";


export default function Home() {
  return (
      <main className="h-screen p-10">
          <Fragment>
              <title>
                  Garage band
              </title>
              <div className="h-full flex flex-col justify-between">
                  <div>
                      The Garage Band
                  </div>
                  <div className="flex justify-between">
                      <div className="inline-block hover:scale-125">
                          <Link href="/drumset">
                              <Image
                                  src={drumset}
                                  width={300}
                                  height={400}
                                  alt=""
                              />
                          </Link>
                      </div>
                      <div className="inline-block hover:scale-125">
                          <Link href="/piano">
                              <Image
                                  src={piano}
                                  width={300}
                                  height={300}
                                  alt=""
                              />
                          </Link>
                      </div>
                  </div>
              </div>

          </Fragment>
      </main>

  )
}
