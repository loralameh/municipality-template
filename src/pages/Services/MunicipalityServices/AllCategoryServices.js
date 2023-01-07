import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Navigation
import DefaultFooter from "examples/Footers/DefaultFooter";
import Navbar from "examples/Navbars";
import footerRoutes from "footer.routes";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";

//redux calls
import { useDispatch, useSelector } from "react-redux";
import { getMunicipalityServices } from "features/municipalityService/municipalityServiceSlice";

import Service from "./sections/Service";
function AllCategoryServices() {
  const dispatch = useDispatch();

  const { municipalityServices } = useSelector((store) => store.municipalityServices);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getMunicipalityServices(categoryId));
    console.log(categoryId);
  }, [dispatch, categoryId]);

  console.log(municipalityServices);

  return (
    <>
      <Navbar />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              all services in this categpry
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

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
        <Container>
          <Service municipalityServices={municipalityServices} />
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AllCategoryServices;
