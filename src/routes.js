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
import ContactUs from "pages/ContactUs";
import MunicipalityServices from "pages/Services/MunicipalityServices";
import Profile from "pages/AboutUser/Profile";

const routes = [
  {
    name: " عن بلدية حاصبيا",
    icon: <Icon>dashboard</Icon>,
    // columns: 1,
    // rowsPerColumn: 2,
    collapse: [
      {
        name: "   تعرف على المجلس البلدي الحالي   ",
        route: "/pages/about-us/municipality-members",
        component: <AboutMembers />,
      },

      {
        name: "الخطة الاستراتيجية",
        route: "/pages/about-us/municipality-plan",
        component: <Plan />,
      },
      {
        name: "المشاريع المنفذة",
        route: "/pages/about-us/municipality-projects",
        component: <AboutMembers />,
      },
    ],
  },
  {
    name: "الخدمات",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "خدمات البلدية",
        description: "الخدمات و المعاملات الرسمية",
        route: "/pages/municipality-services",
        dropdown: true,
        collapse: [
          {
            name: "الخدمات الاعمارية",
            route: "/pages/municipality-services",
            component: <MunicipalityServices />,
          },
          {
            name: "المسقفات",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "الكهرباء",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "خدمات للأهالي",
        description: " (صحة, ترفيه, صيانة, مطاعم...)",
        dropdown: true,
        collapse: [
          {
            name: "الخدمات الاعمارية",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "المسقفات",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "الكهرباء",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
    ],
  },
  {
    name: "اتصل بنا",
    icon: <Icon>article</Icon>,
    route: "/pages/contact-us",
    component: <ContactUs />,
  },
];

export const userRoutes = [
  {
    name: " الملف الشخصي  ",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "   الحساب الشخصي ",
        route: "/pages/profile",
        component: <Profile />,
      },

      {
        name: "عرض أعمالي/خدماتي ",
        route: "/pages/citizen-service",
        component: <AboutMembers />,
      },
      {
        name: "فاتورة الكهرباء  ",
        route: "/pages/bills/electricity",
        component: <AboutMembers />,
      },
    ],
  },
];
export default routes;
