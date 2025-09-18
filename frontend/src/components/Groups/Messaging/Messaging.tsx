import Message from "./Message"
import Title from "../../utils/Title";
import Button from "../../utils/Button";
import type { MessageProps } from "../../../types/Groups";
import { countdownDate } from "../../../utils/dateCalculator";
import Icon from "../../utils/Icon";

type MessagingProps = {
    title: string;
    participants: number;
    date: Date;
    messages?: MessageProps[];
}


export default function Messaging({ title, participants, date, messages }: MessagingProps) {
    // console.log(messages)
    
    const daysLeft = countdownDate(date);
    const expired = daysLeft < 0;
   
    

    return (
        <div id="messaging-container" className="rounded-2xl w-full h-full border-grey border-2 border-lg flex flex-col ">
            <div id="messaging-header" className="relative w-full h-2/12 bg-blue rounded-t-2xl flex-row flex justify-center items-center py-4">
                <div className="flex flex-col w-full items-center">
                    <Title text={title} />
                    <p className="text-white text-xs sm:text-sm place-self-center">
                        <span>{expired? `Ce groupe a expiré depuis ${Math.abs(daysLeft)} jour(s)` : `${daysLeft} jour(s) restant(s)`} </span> - <span> {participants} participants </span>
                    </p>
                </div>
                <div className="absolute right-0 px-8">
                    <Icon icon="dots" className="text-white"/>
                </div>
                
            </div>
            <div id="messages-container" className="w-full px-4 overflow-auto">
                { messages && (
                    messages.map((message) => {
                        if (message.align === "left" || message.align === "right") { //TO DO:  CHANGE THIS LATER tO HANDLE SEVERAL MESSAGES PER PROFILE
                        return <Message key={message.text} text={message.text} avatar={message.avatar} align={message.align} />
                    }})
                )
                    
                }
                
            </div>
            <div id="messagingfooter" className="">
                <div className="flex flex-row justify-around p-4">
                    <input type="text" placeholder="Type your message..." className="w-11/12 border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue" />
                    <Button colour="dark" icon="arrow" rounded/>
                </div>
                

            </div>
        </div>

    )
}