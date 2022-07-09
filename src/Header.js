import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIocn from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {

  const dispatch = useDispatch();
  const logoutOfApp = () =>{
      dispatch(logout())
      auth.signOut()
  }

  return (
    <div className="header">
      <div className="header_left">
        <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="" />

        <div className="header_search">
          {/* SeachIcon */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIocn} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
        <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption
          avatar={true}
          title={"me"}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
