import React from "react";
//https://www.bigeyedeers.co.uk/
export default function Header() {
    return(
        <div className="Header">
        {/*    #001d3b*/}
            <ul>
                <label>CV</label>
                <li>
                    <a href="#">Phone</a>
                </li>
                <li>
                    <a href="#">Mail</a>
                </li>
                <li>
                    <a href="#">Review</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>
        </div>
    );
}
