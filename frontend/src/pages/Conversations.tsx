import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/GroupWishlist/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";

export default function Conversations() {
    return (
        <div className="flex flex-row border-red-800 border-2 m-4 w-full justify-between">
            <div className="border-blue-800 border-2 w-1/2">
                <div className="h-1/2 pb-4">
                    <Groups />
                </div>

                <div className="h-1/2 pb-4">
                    <Wishlist />
                </div>  
            </div>
            <div className=" w-1/2">
                <Messaging />
            </div>
        </div>
    );
}