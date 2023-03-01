import React, { useState } from "react";
import "./GruopRightSide.css";
import Home from "../../../img/home.png";
import Noti from "../../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import Comment from "../../../img/comment.png";
import ShareModal from "../../ShareModal/ShareModal";
// import MyGroup from "../MyGroup/MyGroup";
// import GroupForYou from "../GroupMember/GroupMember";
import FollowersCard from "../../FollowersCard/FollowersCard";
import { Link, useParams } from "react-router-dom";
import GroupReqMember from "../../GroupReqMember/GroupReqMember";
import GroupMember from "../GroupMember/GroupMember";

const GruopRightSide = ({friendsRequest, userStatus, setAny, group_member, member_request}) => {
  // console.log(friendsRequest);
  const {id} = useParams()
  const [modalOpened, setModalOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(id == user.id)
  return (
    <div className="RightSide">
      <div className="navIcons">
      <Link to={'/'}>
      <img src={Home} alt="" />
      </Link>
      <Link to={user && `/profile/${user.id}`}>
      <UilSetting />
      </Link>  
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

     {userStatus === 'myProfile' && id == user.id && <FollowersCard  />}
     
      <GroupReqMember  member_request={member_request}  />
      {/* it's for member not group */}
      <GroupMember group_member={group_member} />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default GruopRightSide;
