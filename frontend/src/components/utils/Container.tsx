import type React from "react";
import Button from "./Button"
import Title from "./Title"

type ContainerProps = {
  colour: "blue" | "green" | "red" | "orange";
  title: string;
  button: React.ReactNode;
  children: React.ReactNode;
};

export default function Container({ colour, title, button, children }: ContainerProps) {
  return (
    <div className={`bg-${colour} p-4 rounded-2xl w-[40vw] aspect-[415/300] max-h-[20vw]  flex flex-col`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <Title text={title} />
        {button}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-1">{children}</div>
    </div>
  );
}
