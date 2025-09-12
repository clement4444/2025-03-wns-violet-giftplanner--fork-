import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";
import Icon from "../components/utils/Icon";

export default function Conversations() {
    return (
        <div className="flex flex-row border-red-800 border-2 m-4 w-full justify-between gap-8">
            <div className="border-blue-800 border-2 h-full w-1/2 flex flex-col justify-between gap-4 ">
                <div className="h-1/2 w-full">
                    <Groups />
                </div>

                <div className="h-1/2 w-full border-red-800 border-2">
                    <Wishlist />
                </div>  
            </div>
            <div className=" w-1/2">
                
                <Messaging />
            </div>
        </div>
        
        

    );
}