import Groups from "../components/Groups/Groups";
import Wishlist from "../components/Groups/Wishlist";
import Messaging from "../components/Groups/Messaging/Messaging";
import PiggyBank from "../components/Groups/PiggyBank";
import React from "react";
import Button from "../components/utils/Button";
import data from "../components/Groups/data/data.json";
import type { GroupProps } from "../types/Groups";





export default function Conversations() {

  const myGroups: GroupProps[] = data.groups.map((group: any) => ({
    ...group,
    messages: group.messages.map((msg: any) => ({
      ...msg,
      align: msg.align === "left" ? "left" : "right"
    }))

  }));

  const [activeGroupId, setActiveGroupId] = React.useState<GroupProps["id"]>(myGroups[0].id);

  const activeGroup = myGroups.find(group => group.id === activeGroupId);
  console.log(activeGroup?.messages)
  //set activeGroup.id in url
    

  

  const [whislist, setWishlist] = React.useState(true);

  return (
    <div className="flex flex-row h-full justify-between w-full px-[1vw]">
      {/* Left Column */}
      <div className="flex flex-col w-1/2 h-full min-h-0 justify-between">
        
        <div className="w-full h-[calc(50%-2rem)] flex justify-center pb-4  ">
          <Groups groups={myGroups} setActiveGroup={setActiveGroupId}/>
        </div>

       
        <div className="w-full h-[calc(50%)] flex justify-center pt-4 ">
          <div className=" flex flex-col justify-end ">
           
            <div className="flex flex-row gap-2 mb-2">
              <Button text="Wishlist" icon="heart" colour="orange" onClick={() => {setWishlist(true)}} />
              <Button text="Cagnotte" icon="dollar" colour="yellow" onClick={() => {setWishlist(false)}}/>
            </div>

            <div className="h-full">
              {activeGroup && (
                whislist 
                  ? <Wishlist wishlistItems={activeGroup.wishlist} /> 
                  : <PiggyBank pot={activeGroup.fund} />
              )}   
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 w-1/2 mt-0 overflow-y-auto justify-center">
          {activeGroup && 
            <Messaging
            title={activeGroup.title}
            participants={activeGroup.participants}
            date={new Date(activeGroup.date)}
            messages={activeGroup.messages}
            />
          } 
        
      </div>
    </div>
  );
}

