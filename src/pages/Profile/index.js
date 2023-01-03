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

function Profile() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings, isLoading } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings]);

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string().required("البريد الالكتروني مطلوب"),
      message: Yup.string().required("الرسالة مطلوبة"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("login", values);
      // dispatch(createContactUsMessage(values));
      resetForm();
    },
  });
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/authorization/sign-in",
          label: "دخول",
          color: "info",
        }}
        transparent
        light
      />

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
        {/* <Grid container mt={{ xs: 12, md: 8 }} py={3}>
          <Grid item xs={12} md={4}>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              flexDirection="column"
            >
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <img style={{ width: "10rem" }} src={bgImage} alt="profile" />
                <IconButton
                  sx={{
                    "&:hover": {
                      opacity: "1",
                    },
                    position: "absolute",
                    opacity: "0.5",
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera style={{ fill: "#fff" }} />
                </IconButton>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={{ xs: 3, md: 0 }}>
                <MKTypography variant="h3" color="white" mb={1}>
                  لورا لمع
                  <IconButton color="primary" aria-label="edit profile" component="label">
                    <EditIcon style={{ fill: "#fff" }} />
                  </IconButton>
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    71441965{" "}
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    hello@creative-tim.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    حي صفيفا
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid> */}

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
              الملف الشخصي
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
          <Grid container mt={{ xs: 12, md: 8 }} py={3}>
            <Grid item xs={12} md={4}>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                flexDirection="column"
              >
                <MKBox display="flex" justifyContent="center" alignItems="center">
                  <img style={{ width: "10rem" }} src={bgImage} alt="profile" />
                  <IconButton
                    sx={{
                      "&:hover": {
                        opacity: "1",
                      },
                      position: "absolute",
                      opacity: "0.5",
                    }}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera style={{ fill: "#fff" }} />
                  </IconButton>
                </MKBox>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={8}>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
              >
                <MKBox py={{ xs: 3, md: 0 }}>
                  <MKTypography variant="h3" mb={1}>
                    لورا لمع
                    <IconButton color="primary" aria-label="edit profile" component="label">
                      <EditIcon style={{ fill: "#fff" }} />
                    </IconButton>
                  </MKTypography>
                  <MKBox display="flex" p={1}>
                    <MKTypography variant="button">
                      <i className="fas fa-phone" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      71441965
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" p={1}>
                    <MKTypography variant="button">
                      <i className="fas fa-envelope" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      hello@creative-tim.com
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" p={1}>
                    <MKTypography variant="button">
                      <i className="fas fa-map-marker-alt" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      حي صفيفا
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
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

export default Profile;
