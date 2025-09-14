import Conversations from "./Conversations";
import Navigation from "../components/Navigation/Navigation";

export default function Dashboard() {
    return (
        <div className="h-screen w-full flex flex-row py-[1vw] px-[2vw] ">
            {/* Navigation content goes here */}
            <Navigation />
            <Conversations />
            {/* <Wishlists />
            <Profile /> */}
            
            
        </div>
    );
}