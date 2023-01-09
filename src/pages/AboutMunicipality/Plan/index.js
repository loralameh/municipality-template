import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function Plan() {
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
                <Grid item xs={12} md={6}>
                  <MKBox>
                    <DefaultInfoCard
                      icon="public"
                      title="الرؤية"
                      description="   اضافة رؤية البلدية "
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox>
                    <DefaultInfoCard
                      icon="payments"
                      title="الرسالة "
                      description=" الى الماطنين اضافة رسالة البلدية "
                    />
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>

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
    </>
  );
}

export default Plan;
