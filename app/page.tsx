"use client"
import React, { useEffect, useState } from "react";
import getMemes from "@/actions/get-memes";
import Card from "@/components/card";
import Loading from "@/components/loading";
import { MemeTemplate } from "@/lib/types";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<MemeTemplate[]>();

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const res = await getMemes();
                if (res) {
                    setData(res);
                }
                console.log(res);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchMemes();
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [data]);

    if (loading || !data) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 md:grid-flow-row gap-4">
                {
                    data?.map((item: MemeTemplate) => {
                        return (
                            <Card name={item.name} image={item.blank} link={`/create/${item.id}`} key={item.id}></Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home