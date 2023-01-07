import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import Navbar from "examples/Navbars";
import Icon from "@mui/material/Icon";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// Routes

import footerRoutes from "footer.routes";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function SingleService(props) {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings, isLoading } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings]);
  console.log(props);

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
              single service page
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
          <MKBox lineHeight={1}>
            <MKTypography display="block" variant="h4" fontWeight="bold" mb={0.5}>
              lora
            </MKTypography>
            <MKTypography
              variant="button"
              fontWeight="regular"
              lineHeight={1}
              color="text"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AccessTimeIcon fontSize="small" />
              &nbsp; 3 days
            </MKTypography>
            <MKTypography
              variant="button"
              fontWeight="regular"
              lineHeight={1}
              color="text"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <AttachMoneyIcon fontSize="small" />
              &nbsp; 25,000
            </MKTypography>
          </MKBox>
          <MKTypography variant="body2" color="text" my={2}>
            hjhjh hhjh
          </MKTypography>

          <MKTypography display="block" variant="h5" fontWeight="bold" mb={0.5}>
            المستندات المطلوبة
          </MKTypography>

          <MKTypography variant="body2" color="text" my={2}>
            1- تاتان
          </MKTypography>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SingleService;
