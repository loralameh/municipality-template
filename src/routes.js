/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";

// Pages
import AboutMembers from "pages/AboutMunicipality/AboutMembers";
import Plan from "pages/AboutMunicipality/Plan";
import Projects from "pages/AboutMunicipality/Projects";
import ContactUs from "pages/ContactUs";
import MunicipalityServices from "pages/Services/MunicipalityServices";
import Profile from "pages/AboutUser/Profile";
import CitizenService from "pages/AboutUser/CitizenServices";
import Bills from "pages/AboutUser/Bills";
import Logout from "pages/Authorization/Logout";
const routes = [
  {
    name: " ???? ?????????? ????????????",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "   ???????? ?????? ???????????? ???????????? ????????????   ",
        route: "/pages/about-us/municipality-members",
        component: <AboutMembers />,
      },

      {
        name: "?????????? ????????????????????????",
        route: "/pages/about-us/municipality-plan",
        component: <Plan />,
      },
      {
        name: "???????????????? ??????????????",
        route: "/pages/about-us/municipality-projects",
        component: <Projects />,
      },
    ],
  },
  {
    name: "??????????????",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "?????????? ??????????????",
        description: "?????????????? ?? ?????????????????? ??????????????",
        route: "/pages/municipality-services",
        dropdown: true,
        collapse: [],
      },
      {
        name: "?????????? ??????????????",
        route: "/pages/citizen-services",
        description: " (??????, ??????????, ??????????, ??????????...)",
        dropdown: true,
        collapse: [],
      },
    ],
  },
  {
    name: "???????? ??????",
    icon: <Icon>article</Icon>,
    route: "/pages/contact-us",
    component: <ContactUs />,
  },
];

export const userRoutes = [
  {
    name: " ?????????? ????????????  ",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "   ???????????? ???????????? ",
            route: "/pages/profile",
            component: <Profile />,
          },

          {
            name: "?????? ????????????/???????????? ",
            route: "/pages/citizen-service",
            component: <CitizenService />,
          },
          {
            name: "???????????? ????????????????  ",
            route: "/pages/bills/electricity",
            component: <Bills />,
          },
        ],
      },
      {
        collapse: [
          {
            name: "????????",
            route: "/pages/authentication/logout",
            component: <Logout />,
          },
        ],
      },
    ],
  },
];
export default routes;
