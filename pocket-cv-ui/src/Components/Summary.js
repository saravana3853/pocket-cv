import React from "react";
import Profile from "./Profile"
import Engagements from "./Engagements"
import Highlights from "./Highlights"
import History from "./History"
import Education from "./Education"

const Summary =()=>{
        return (
            <div id="summary" class="h-screen w-full flex bg-gradient-to-b from-white to-gray-400">
                <div class="p-2 m-2 w-full flex-col">
                <Profile/>
                </div>
                <div class="p-2 m-2 w-full flex-col">
                    <History/>
                    <Education/>
                </div>
                <div class="p-2 m-2 w-full flex-col">
                  <Engagements/>
                  <Highlights/>
                </div>
            </div>
        );
}

export default Summary;
