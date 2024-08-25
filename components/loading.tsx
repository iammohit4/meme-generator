import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="fixed left-0 top-0 h-svh w-svw flex justify-center items-center text-center">
            <Spinner color="primary" labelColor="primary" />
        </div>
    )
}

export default Loading