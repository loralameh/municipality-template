import React, { useEffect } from "react";

// @mui components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import bgImage from "assets/images/service.jpg";

//redux call
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

function MainPage(props) {
  const { getData } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
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
                {props.pageName}
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
          <MKBox component="section" py={2} id="building">
            <Container>
              <Grid container item xs={12} lg={6}>
                <MKTypography variant="h3" mb={6}>
                  مجوعات الخدمات
                </MKTypography>
              </Grid>
              <Grid container spacing={3}>
                {props.data.map((element) => {
                  return (
                    <Grid key={element._id} item xs={12} sm={6} lg={3}>
                      {/* goes to AllCategoryService  */}
                      <BackgroundBlogCard
                        image={element.image}
                        title={element.name}
                        description={element.description}
                        action={{
                          type: "internal",
                          route: `${props.baseRoute}/${element._id}`,
                          color: "info",
                          label: "انقر للمزيد",
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </MKBox>
        </Card>
      </MKBox>
    </>
  );
}

export default MainPage;
MainPage.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  pageName: PropTypes.string.isRequired,
  baseRoute: PropTypes.string.isRequired,
};
