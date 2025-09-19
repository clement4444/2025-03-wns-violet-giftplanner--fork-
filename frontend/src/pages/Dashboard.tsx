import Navigation from "../components/Navigation/Navigation";
import Conversations from "./Conversations";

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
// - fix responsive
