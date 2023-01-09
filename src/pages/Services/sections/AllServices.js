import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";

import Service from "./Service";
import PropTypes from "prop-types";

function AllServices(props) {
  return (
    <>
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
              {props.category && props.category.name}
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
        {props.data.length > 0 && (
          <Container>
            <Service services={props.data} baseRoute={props.baseRoute} />
          </Container>
        )}

        {props.data.length == 0 && (
          <MKBox minHeight="10rem" justifyContent="center" alignItems="center" display="flex">
            لم يتم اضافة أي خدمات
          </MKBox>
        )}
      </Card>
    </>
  );
}

export default AllServices;
AllServices.propTypes = {
  data: PropTypes.array,
  category: PropTypes.object,
  baseRoute: PropTypes.string.isRequired,
};
