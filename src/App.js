import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Home from "pages/Home";
import SignIn from "pages/Authorization/SignIn";
import Register from "pages/Authorization/Register";
import Profile from "pages/AboutUser/Profile";
import AllMunicipalityCategoryServices from "pages/Services/MunicipalityServices/AllCategoryServices";

// Material Kit 2 React routes
import routes from "routes";
import { userRoutes } from "routes";

//set right to left direction
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SnackBar from "examples/AttentionCatchers/SnackBar";
import SingleMunicipalityService from "pages/Services/MunicipalityServices/SingleService";
import SingleCitizenService from "pages/Services/CitizenServices/SingleService";
import Navbar from "examples/Navbars";
import MunicipalityServices from "pages/Services/MunicipalityServices";
import CitizenService from "pages/Services/CitizenServices";
import AllCitizenCategoryServices from "pages/Services/CitizenServices/AllCategoryServices";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  const { pathname } = useLocation();
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.route} />;
      }

      return null;
    });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackBar />

        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            {getRoutes(routes)}
            {getRoutes(userRoutes)}

            <Route path="/pages/municipality-services/" element={<MunicipalityServices />} />
            <Route
              path="/pages/municipality-services/:categoryId"
              element={<AllMunicipalityCategoryServices />}
            />
            <Route
              path="/pages/municipality-services/:categoryId/service/:serviceId"
              element={<SingleMunicipalityService />}
            />

            <Route path="/pages/citizen-services/" element={<CitizenService />} />
            <Route
              path="/pages/citizen-services/:categoryId"
              element={<AllCitizenCategoryServices />}
            />
            <Route
              path="/pages/citizen-services/:categoryId/service/:serviceId"
              element={<SingleCitizenService />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

          <Route path="/pages/authorization/sign-in" element={<SignIn />} />
          <Route path="/pages/authorization/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}
