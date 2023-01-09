import React, { useEffect, useState } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
import { userRoutes } from "routes";
//redux call
import { useSelector, useDispatch } from "react-redux";
import { getAllServiceCategories } from "features/serviceCategory/serviceCategorySlice";
import { Outlet } from "react-router";
import Loader from "examples/Loader";
import MunicipalityServices from "pages/Services/MunicipalityServices";

const Navbar = () => {
  const [allRoutes, setAllRoutes] = useState([]);
  const { user } = useSelector((store) => store.user);
  const { isLoading, categories } = useSelector((store) => store.serviceCategory);
  const name = user ? user.name : "";

  const dispatch = useDispatch();
  useEffect(() => {
    //fix getAllServiceCategories func to get all sevices combined if no props was added to it

    dispatch(getAllServiceCategories("municipality"));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      getRoutes();
    }
  }, [categories]);

  const getRoutes = () => {
    const _routes = routes.map((route) => {
      if (route.name == "الخدمات") {
        return { ...route, collapse: getSubRoutes() };
      }
      return route;
    });
    setAllRoutes(_routes);
  };

  const getSubRoutes = () => {
    let municipalityCollapse = [];
    let citizenCollapse = [];
    for (const c of categories) {
      console.log(c);
      if (c.serviceSource == "municipality") {
        municipalityCollapse.push({
          name: c.name,
          route: `/pages/municipality-services/${c._id}`,
          component: <MunicipalityServices />,
        });
      } else if (c.serviceSource == "citizen") {
        //fix route when we add the citizen routes
        citizenCollapse.push({
          name: c.name,
          route: `/pages/municipality-services/${c._id}`,
          component: <MunicipalityServices />,
        });
      }
    }
    return [
      {
        name: "خدمات البلدية",
        description: "الخدمات و المعاملات الرسمية",
        route: "/pages/municipality-services",
        dropdown: true,
        collapse: municipalityCollapse,
      },
      {
        //fix route when we add the citizen routes
        name: "خدمات للأهالي",
        description: " (صحة, ترفيه, صيانة, مطاعم...)",
        route: "/pages/municipality-services",
        dropdown: true,
        collapse: citizenCollapse,
      },
    ];
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {!user && (
            <DefaultNavbar
              routes={allRoutes}
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
              routes={[...allRoutes, ...userRoutes]}
              avatar={{
                name: name,
              }}
              transparent
              light
            />
          )}
        </>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;
