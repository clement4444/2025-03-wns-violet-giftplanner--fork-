type MessageProps = {
  text: string;
  avatar?: string;
  align?: "left" | "right";
};

export default function Message ({ text, avatar, align = "left" }: MessageProps) {
  

  const isLeft = align === "left";

  return (
    <div className={`flex items-start gap-2 my-2 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full ">
        <img src={`/images/${avatar}.jpg`} alt="Profile" className="h-12 w-12 rounded-full object-cover mr-4"/>
      </div>

      {/* Message bubble TO DO: make it a component */} 
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl ${
          isLeft
            ? "bg-grey rounded-bl-none"
            : "bg-light-grey rounded-br-none"
        }`}
      >
        {text}
      </div> 
    </div>
  );
};
