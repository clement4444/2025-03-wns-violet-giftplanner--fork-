import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";
import Button from "../components/utils/Button";
export default function Conversations() {
  return (
    <div className="flex flex-col lg:flex-row h-full justify-between w-full">
      {/* Left Column */}
      <div className="flex flex-col lg:w-1/2 w-full h-full min-h-0">
        {/* Groups Section */}
        <div className="w-full h-[calc(50%-32px)] flex justify-center pb-4">
          <Groups />
        </div>

        {/* Wishlist Section */}
        <div className="w-full flex-1 flex flex-col items-center pt-4">
          <div className="flex flex-col justify-end">
            {/* Button Row */}
            <div className="flex flex-row gap-2 mb-4">
              <Button text="Wishlist" icon="heart" colour="orange" />
              <Button text="Cagnotte" icon="dollar" colour="yellow" />
            </div>

            {/* Wishlist content fills remaining space */}
            <div className="overflow-y-auto">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 w-full lg:w-1/2 lg:mt-0 overflow-y-auto justify-center">
        <Messaging />
      </div>
    </div>
  );
}

