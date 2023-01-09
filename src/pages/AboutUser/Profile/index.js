import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import EditIcon from "@mui/icons-material/Edit";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function Profile() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings, user]);

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
    </>
  );
}

export default Profile;
