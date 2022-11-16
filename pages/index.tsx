import {Fragment} from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
        <title>
            Garage band
        </title>
        <Link href="/piano">
          Piano
        </Link>
        <Link href="/drumset">
            DrumSet
        </Link>
        <div>
            This is the main page
        </div>
    </Fragment>
  )
}
