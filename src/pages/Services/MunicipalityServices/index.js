import React, { useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import Navbar from "examples/Navbars";

//Default footer
import DefaultFooter from "examples/Footers/DefaultFooter";

// import ServiceCategory from "pages/MunicipalityServices/sections/ServiceCategory"
import ServiceCategory from "./sections/ServiceCategory";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/service.jpg";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { getServiceCategory } from "features/serviceCategory/serviceCategorySlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function MunicipalityServices() {
  // const categories = [
  //   {
  //     name: "Rover raised $65 million",
  //     description:
  //       "Finding temporary housing for your dog should be as easy as renting an Airbnb. Thats the idea behind Rover ...",
  //     image: "nhnh",
  //   },
  //   {
  //     title: "Rover raised $65 million",
  //     description:
  //       "Finding temporary housing for your dog should be as easy as renting an Airbnb. Thats the idea behind Rover ...",
  //     category: "/pages/blogs/author",
  //     requiredDocs: ["strig1", "hghgh"],
  //     expectedTime: "ghg",
  //     cost: 20,
  //   },
  // ];
  const Categories = [
    {
      image: post1,
      name: "الخدمات الاعمارية",
      description: "بناء و اعمار",
      route: "/",
    },
    {
      image: post2,
      name: "المسقفات",
      description: "المسقفات",
      route: "/",
    },
    {
      image: post3,
      name: "الكهرباء",
      description: "الكهرباء",
      route: "/",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceCategory("municipality"));
  }, []);

  return (
    <>
      <Navbar />

      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />

        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <ServiceCategory data={Categories} />
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default MunicipalityServices;
