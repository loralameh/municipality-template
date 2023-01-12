import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//redux call
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCitizenService } from "features/citizenService/citizenServiceSlice";
import Loader from "examples/AttentionCatchers/Loader";
import Slideshow from "examples/Slideshow";
import SocialButtons from "examples/SocialButtons";

function SingleService() {
  const dispatch = useDispatch();
  const { serviceId } = useParams();
  const { citizenService, isLoading } = useSelector((store) => store.citizenServices);

  console.log(citizenService);
  useEffect(() => {
    dispatch(getCitizenService(serviceId));
  }, [dispatch, serviceId]);

  return (
    <>
      {isLoading && <Loader />}

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
              {citizenService && citizenService.title}
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
        {citizenService && (
          <Container>
            {citizenService.pictureGallery && <Slideshow images={citizenService.pictureGallery} />}
            <MKBox lineHeight={1} my={1}>
              <MKTypography display="block" variant="h4" fontWeight="bold" mb={0.5}>
                {citizenService.title}
              </MKTypography>
              <SocialButtons
                githubLink={citizenService.githubLink}
                fbLink={citizenService.fbLink}
                instaLink={citizenService.instaLink}
                twitterLink={citizenService.twitterLink}
                linkedinLink={citizenService.linkedinLink}
                website={citizenService.website}
                whatsAppLink={citizenService.whatsAppLink}
              />

              <MKTypography
                variant="button"
                fontWeight="regular"
                lineHeight={1}
                color="text"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocalPhoneIcon fontSize="small" />
                &nbsp; {citizenService.servicePhoneNumber}
              </MKTypography>
              <MKTypography
                variant="button"
                fontWeight="regular"
                lineHeight={1}
                color="text"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon fontSize="small" />
                &nbsp; {citizenService.location}
              </MKTypography>

              <MKTypography variant="body2" color="text" my={2}>
                {citizenService.description}
              </MKTypography>
            </MKBox>
          </Container>
        )}
      </Card>
    </>
  );
}

export default SingleService;
