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
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import CitizenServices from "pages/Services/CitizenServices";

const Navbar = () => {
  const [allRoutes, setAllRoutes] = useState([]);
  const { user } = useSelector((store) => store.user);
  const { isLoading, categories } = useSelector((store) => store.serviceCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServiceCategories());
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      getRoutes();
    }
  }, [categories]);

  const getRoutes = () => {
    const _routes = routes.map((route) => {
      if (route.name === "الخدمات") {
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
      if (c.serviceSource === "municipality") {
        municipalityCollapse.push({
          name: c.name,
          route: `/pages/municipality-services/${c._id}`,
          component: <MunicipalityServices />,
        });
      } else if (c.serviceSource === "citizen") {
        citizenCollapse.push({
          name: c.name,
          route: `/pages/citizen-services/${c._id}`,
          component: <CitizenServices />,
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
        name: "خدمات للأهالي",
        description: " (صحة, ترفيه, صيانة, مطاعم...)",
        route: "/pages/citizen-services",
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
                name: `${user.name}`,
              }}
              transparent
              light
            />
          )}
        </>
      )}
      <Outlet />

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Navbar;
