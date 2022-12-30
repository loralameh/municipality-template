// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import { useDispatch, useSelector } from "react-redux";

function ServiceCategory(props) {
  const { categories } = useSelector((store) => store.serviceCategory);

  return (
    <MKBox component="section" py={2} id="building">
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}></MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {categories.map((element) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <BackgroundBlogCard
                  // image={element.image}
                  //image={post1}
                  title={element.name}
                  // description={element.description}
                  action={{
                    type: "internal",
                    // route: element.route,
                    route: "/",
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
  );
}

export default ServiceCategory;

/*<Grid container spacing={3}>
          {categories.map((element) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={categories.image}
                  title={element.title}
                  description={element.description}
                  action={{
                    type: "internal",
                    route: element.route,
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            );
          })}

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container> */
