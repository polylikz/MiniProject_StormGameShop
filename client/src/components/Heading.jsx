import React from "react";
import data from "./data";

//JSX Code
function Heading() {

    return <div className="Heading">
                {/* <span><img src="https://w7.pngwing.com/pngs/314/624/png-transparent-resolution-storm-blue-wrench-storm-thumbnail.png" alt="This is Lighting"></img></span> */}
                <span class="head">
                    Storm Gaming
                </span>
                <span>
                    <span class="cart">Total Games: {data.length}</span>
                </span>
            </div>
        ;
}

export default Heading;
