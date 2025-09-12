import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/GroupWishlist/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";

export default function Conversations() {
    return (
        <div className="flex">
            <div>
                <Groups />
                <Wishlist />
            </div>
            <div>
                <Messaging />
            </div>
        </div>
    );
}