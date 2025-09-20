type MessageProps = {
  text: string;
  avatar?: string;
  align?: "left" | "right";
};

export default function Message({ text, avatar, align = "left" }: MessageProps) {
  const isLeft = align === "left";

  return (
    <div className={`flex items-end my-2  ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`flex  ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        {/* Avatar */}
        <div
          className={`flex ${isLeft ? "justify-start" : "justify-end"} w-[5vw] h-[5vw] min-aspect[1/1] rounded-full `}
        >
          <img src={`/images/${avatar}.jpg`} alt="Profile" className=" rounded-full object-cover " />
        </div>

        {/* Message bubble TO DO: make it a component */}
        <div
          className={`max-w-xs px-4 py-2 mt-[3rem] rounded-2xl ${
            isLeft ? "bg-grey rounded-tl-none " : "bg-light-grey rounded-tr-none "
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
