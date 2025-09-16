import Message from "./Message"
import Icon from "../../utils/Icon";
import Title from "../../utils/Title";
import type { MessageProps } from "../../../types/Groups";

type MessagingProps = {
    title: string;
    participants: number;
    date: Date;
    messages?: MessageProps[];
}


export default function Messaging({ title, participants, date, messages }: MessagingProps) {
    // console.log(messages)
    const daysLeft = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (60 * 60 * 24));
    return (
        <div id="messaging-container" className="rounded-2xl w-[40vw] max-w-[450px] h-full border-red-500 border-4 border-lg flex flex-col ">
            <div id="messaging-header" className=" w-full h-2/12 bg-blue rounded-t-2xl flex-row flex justify-center items-center py-4">
                <div className="flex flex-col">
                    <Title text={title} />
                    <p className="text-white text-xs sm:text-sm place-self-center">
                        <span>{daysLeft} jours restants </span> - <span> {participants} participants </span>
                    </p>
                </div>
                
            </div>
            <div id="messages-container" className="w-11/12 mx-auto overflow-auto border-4 border-gray-200">
                { messages && (
                    messages.map((message) => {
                        if (message.align === "left" || message.align === "right") { //TO DO:  CHANGE THIS LATER tO HANDLE SEVERAL MESSAGES PER PROFILE
                        return <Message key={message.text} text={message.text} avatar={message.avatar} align={message.align} />
                    }})
                )
                    
                }
                
            </div>
            <div id="message-input-container" className="mt-auto pt-4 flex flex-row">
                <input type="text" placeholder="Type your message..." className="w-full border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue" />
                <Icon icon="arrow" />

            </div>
        </div>

    )
}