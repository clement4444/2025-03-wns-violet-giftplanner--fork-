import type React from "react";
import Button from "./Button"
import Title from "./Title"

type ContainerProps = {
    colour: "blue" | "green" | "red" | "orange";
    title: string;
    button: React.ReactNode;
    children: React.ReactNode
}

export default function Container({ colour, title, button, children }: ContainerProps) {
    return (
        <div className={`bg-${colour} p-4 rounded-2xl w-full h-full overflow-auto`}>
            <div className="flex justify-between items-center mb-4 border-red-500 border pb-2">
                <Title text={title} />
                {button}
            </div>

  
            <div className="space-y-4">
                {children}    
            </div>
        </div>

    )
}