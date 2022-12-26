// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Places(props) {
  const { data, title } = props;
  return (
    <MKBox component="section" py={2} id="building">
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            {title}
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {data.map((element) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={data.image}
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
      </Container>
    </MKBox>
  );
}

export default Places;
