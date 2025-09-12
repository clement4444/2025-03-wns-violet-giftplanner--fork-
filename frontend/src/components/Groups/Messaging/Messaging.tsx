import Message from "./Message"
import data from "./data.json";


export default function Messaging() {


    const messages = data.messages
    return (
        <div id="messaging-container" className="rounded-2xl w-full border-red-500 border-2 border-lg p-4 flex flex-col">
            <div id="messaging-header" className="bg-blue rounded-2xl pb-2 mb-4 flex justify-between items-center">
                <div>
                    <h1>
                        Anniversaire Mamie Jeannine
                    </h1>
                    <p>
                        <span> 3 jours restants </span> - <span> 5 participants </span>
                    </p>
                </div>
                <div>
                    ...
                </div>
                
            </div>
            <div id="messages-container">
                
            </div>
            <div id="message-input-container"> 
                {
                    messages.map((message) => {
                        if (message.align === "left" || message.align === "right") { //TO CHANGE THIS LATER
                        return <Message key={message.text} text={message.text} avatar={message.avatar} align={message.align} />
                    }})
                }
                
            </div>
        </div>

    )
}