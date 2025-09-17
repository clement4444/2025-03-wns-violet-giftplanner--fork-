import Conversations from "./Conversations";
import Navigation from "../components/Navigation/Navigation";

export default function Dashboard() {
    return (
        <div className="h-[100vh] min-aspect-[900/600] flex flex-row p-[2vw] m-auto overflow-hidden ">
            {/* Navigation content goes here */}
            <Navigation />
            <Conversations />
            {/* <Wishlists />
            <Profile /> */}
            
            
        </div>
    );
}

// TO DO:
// - whislist alignment
// - fix look cagnotte
// - fix scrollbar
