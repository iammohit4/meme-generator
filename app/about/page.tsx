import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { LuLinkedin } from "react-icons/lu";

const About = () => {
    return (
        <>
            <h1 className="text-white font-bold text-2xl">About</h1>
            <p className="my-2">This is a meme generator made using Typescript, Next.js 14, NextUI, TailwindCSS and an open source mene generator api.</p>
            <div className="flex gap-2">
                <Link href="https://github.com/iammohit4/meme-generator" target="_blank"><Button>Source Code</Button></Link>
                <Link href="https://linkedin.com/in/mohit-sundrani-11470a309" target="_blank"><Button color="primary"><LuLinkedin /></Button></Link>
            </div>
        </>
    )
}

export default About