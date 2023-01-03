import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

//redux call
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const name = user ? user.name : "";
  return (
    <>
      {!user && (
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/pages/authorization/sign-in",
            label: "دخول",
            color: "info",
          }}
          transparent
          light
        />
      )}
      {user && (
        <DefaultNavbar
          routes={routes}
          avatar={{
            name: name,
          }}
          transparent
          light
        />
      )}
    </>
  );
};

export default Navbar;
