"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import getMeme from "@/actions/get-meme";
import Image from "next/image";
import Loading from "@/components/loading";
import { Button, Input } from "@nextui-org/react";
import { LuDownload } from "react-icons/lu";
import { MemeTemplate } from "@/lib/types";
import NotFound from "@/components/not-found";

const Create = () => {
    const pathname = usePathname();
    const path = pathname.split("/");
    const current = path[path.length - 1];

    const [loading, setLoading] = useState<boolean>(true);
    const [notFound, setNotFound] = useState<boolean>();
    const [data, setData] = useState<MemeTemplate>();
    const [image, setImage] = useState<string>("");
    const [text, setText] = useState<string[]>([]);

    const handleInput = (index: number, value: string) => {
        const updatedValues = [...text];
        updatedValues[index] = value;
        setText(updatedValues);
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setImage("https://api.memegen.link/images/" + current + "/" + text.join("/") + ".png");
        setLoading(false);
    }

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(image);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const element = document.createElement("a");
            element.href = url;
            element.download = `${data?.name}.png`;
            document.body.appendChild(element);
            element.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(element);
        }
        catch (e) {
            console.error(e);
            alert("Something went wrong");
        }
        setLoading(false);
    }

    useEffect(() => {
        const fetchMeme = async () => {
            const res = await getMeme(current);
            if (res) {
                setData(res);
            }
        }
        fetchMeme();
    }, [current]);

    useEffect(() => {
        setText(new Array(data?.lines).fill(""));
        var img = "https://api.memegen.link/images/" + current + "/";
        if (data) {
            for (let i = 0; i < data?.lines; i++) {
                img = img + "Text " + (i + 1) + "/";
            }
            img = img + ".png";
            setImage(img);
        }
    }, [data, current]);

    useEffect(() => {
        if (data) {
            setNotFound(false);
            setLoading(false);
        }
        else {
            setNotFound(true);
        }
    }, [pathname, current, data]);

    if (notFound) {
        return (
            <NotFound />
        )
    }

    if (loading || !data || notFound == undefined) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <h1 className="text-white font-bold text-2xl">{data?.name}</h1>
            <div className="block md:flex mt-4 gap-4">
                <div className="block w-full md:w-1/2">
                    <Image loading="eager" src={image} alt={data?.name} height={500} width={500} className="rounded-xl"></Image>
                </div>
                <div className="block w-full md:w-1/2 mt-5 md:mt-0">
                    <form onSubmit={handleCreate}>
                        {
                            text.map((value: string, index: number) => (
                                <div key={index}>
                                    <Input onChange={(e) => handleInput(index, e.target.value)} type="text" label={`Text ${index + 1}`} value={value} className="mb-4" autoComplete="off" required />
                                </div>
                            ))
                        }
                        <div className="flex gap-2">
                            <Button type="submit" color="default">Create</Button>
                            <Button onClick={handleDownload} type="button" color="primary"><LuDownload /></Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create