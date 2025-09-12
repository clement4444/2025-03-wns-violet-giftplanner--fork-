import Conversations from "./Conversations";
import Navigation from "../components/Navigation/Navigation";

export default function Dashboard() {
    return (
        <div className="h-screen w-full overflow-hidden flex flex-row ">
            {/* Navigation content goes here */}
            <Navigation />
            <Conversations />
            {/* <Wishlists />
            <Profile /> */}
            
            
        </div>
    );
}