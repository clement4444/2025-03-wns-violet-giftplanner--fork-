import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";
import Button from "../components/utils/Button";
export default function Conversations() {
  return (
    <div className="flex flex-col lg:flex-row h-ful border-4 border-amber-500 w-full gap-4">
      {/* Left Column */}
      <div className="flex flex-col lg:w-1/2 w-full border-blue-800 border-2 min-h-0">
        {/* Groups Section */}
        <div className="w-full h-1/2 border-green-800 border-4">
          <Groups />
        </div>

        {/* Wishlist Section */}
        <div className="flex flex-col flex-1 w-full border-red-800 border-4 overflow-y-auto justify-between">
          {/* Button Row */}
          <div className="flex flex-row gap-2">
            <Button text="Wishlist" icon="heart" colour="orange" />
            <Button text="Cagnotte" icon="dollar" colour="yellow" />
          </div>

          {/* Wishlist content fills remaining space */}
          <div className=" overflow-y-auto">
            <Wishlist />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 w-full lg:w-1/2 border-gray-800 border-2 mt-4 lg:mt-0 overflow-y-auto">
        <Messaging />
      </div>
    </div>
  );
}

