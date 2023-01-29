import React, { Fragment, useState } from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { Backdrop } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import "./Header.css";

const UserOptions = ({ user }) => {
  const alert = useAlert();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const options = [
    { icon: <ListAltIcon />, tooltipTitle: "Orders", onClick: orders },
    { icon: <PersonIcon />, tooltipTitle: "Profile", onClick: account },
    {
      icon: <ShoppingCartIcon />,
      tooltipTitle: `Cart(${cartItems.length})`,
      onClick: cart,
    },
    { icon: <ExitToAppIcon />, tooltipTitle: "Logout", onClick: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      tooltipTitle: "Dashboard",
      onClick: dashboard,
    });
  }

  function dashboard() {
    history.push("/admin/dashboard");
  }
  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function cart() {
    history.push("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logged Out Successfully!");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial Tooltip Example"
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        style={{ zIndex: "11" }}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
        direction="down"
        className="speedDial"
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.tooltipTitle}
            {...item}
            tooltipOpen={!!(window.innerWidth <= 600)}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
