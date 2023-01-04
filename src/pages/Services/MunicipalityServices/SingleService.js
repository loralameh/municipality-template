import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { Button, TextField, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInput from "components/LOInput";
import Navbar from "examples/Navbars";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import EditIcon from "@mui/icons-material/Edit";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { createContactUsMessage } from "features/contact-us/ContactUsSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";
import { PlaceRounded } from "@mui/icons-material";

function SingleService() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings, isLoading } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings]);

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
              الخطة الاستراتيجية
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
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={12}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={4}>
                  checkbox here
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SingleService;
