import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Sidebar = () => {
  const user = useSelector(selectUser)

    const recentItem = (topic) =>[
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>

    ]
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1655125361075-61a4630facff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl}  className="sidebar_avatar" >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2545</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2545</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('design')}
        {recentItem('developer')}

      </div>
    </div>
  );
};

export default Sidebar;
