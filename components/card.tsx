import React from "react";
import { Card as CardContainer, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const Card = ({ name, image, link }: { name: string, image: string, link: string }) => {
    return (
        <CardContainer className="p-2">
            <CardHeader className="flex-col items-start">
                <h4 className="text-white font-bold text-xl">{name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible">
                <Image loading="lazy" className="object-cover w-full h-auto rounded-xl" src={image} alt={name} height={300} width={500} />
            </CardBody>
            <Link href={link} className="w-full flex justify-center items-center text-center gap-1"><Button className="w-full" color="primary">Create <LuArrowRight /></Button></Link>
        </CardContainer>
    );
}

export default Card