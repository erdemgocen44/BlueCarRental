import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { logout } from "../../store/user/userActions";
import * as alertify from "alertifyjs";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
const UserMenu = () => {
  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Çıkmak istediginize emin misiniz?",
      function () {
        alertify.success("Ok");
        dispatchUser(logout());
        localStorage.removeItem("token");
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;

  return (
    <>
      {isUserLogin ? (
        <DropdownButton
          id="dropdown-basic-button"
          title={`${user.firstName} ${user.lastName}`}
          size="sm"
          align="end"
        >
          <Dropdown.Item as={Link} to="/reservations">
            Reservations
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <Button as={Link} size="sm" to="/login">
          <FiUser /> Login
        </Button>
      )}
    </>
  );
};

export default UserMenu;
