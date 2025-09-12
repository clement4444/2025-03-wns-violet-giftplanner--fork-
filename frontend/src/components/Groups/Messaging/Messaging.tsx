import Message from "./Message"
import data from "./data.json";
import Icon from "../../utils/Icon";
import Title from "../../utils/Title";


export default function Messaging() {


    const messages = data.messages
    return (
        <div id="messaging-container" className="rounded-2xl w-full h-full border-red-500 border-2 border-lg flex flex-col ">
            <div id="messaging-header" className=" w-full h-2/12 bg-blue rounded-t-2xl flex-row flex justify-center items-center py-4">
                <div className="flex flex-col">
                    <Title text="Groupe Anniversaire Mammie Jeannine" />
                    <p className="text-white text-xs sm:text-sm place-self-center">
                        <span>5 jours restants </span> - <span> 13 participants </span>
                    </p>
                </div>
                
            </div>
            <div id="messages-container" className="w-11/12 mx-auto overflow-auto border-4 border-gray-200">
                {
                    messages.map((message) => {
                        if (message.align === "left" || message.align === "right") { //TO CHANGE THIS LATER
                        return <Message key={message.text} text={message.text} avatar={message.avatar} align={message.align} />
                    }})
                }
                
            </div>
            <div id="message-input-container" className="mt-auto pt-4 flex flex-row">
                <input type="text" placeholder="Type your message..." className="w-full border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue" />
                <Icon icon="arrow" />

            </div>
        </div>

    )
}