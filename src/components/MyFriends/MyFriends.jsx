import React from "react";
import "./MyFriends.css";
import { UilPlusSquare } from "@iconscout/react-unicons";

import { TrendData } from "../../Data/TrendData.js";
const MyFriends = ({friends}) => {
  // console.log(friends)
  return (
    <div className="Trend">
      <div className="TrendCard">
        <h3 className="groupsheder">
        My Friends <UilPlusSquare />
        </h3>
        <hr />
        {friends && friends.map((e, id) => {
          return (
            <div key={id} className="trend">
              <div>
                <img src={TrendData[0].img} alt="" className="trendImage" />
                <div className="gname">
                  <span>{e.user_name}</span>
                  <span>friends</span>
                </div>
              </div>
              {/* <hr /> */}
              <button className="button gc-button">Go</button>
            </div>
          );
        })}
      </div>
<br />
    </div>
  );
};

export default MyFriends;
