// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";

function ServiceCategory({ municipalityServices }) {
  // const municipalityServices = [
  //   {
  //     id: "1",
  //     image: "image",
  //     title: "title1",
  //     route: "/pages/municipality-services",
  //     description: "description",
  //     category: "category",
  //     requiredDocs: ["doc1", "doc2"],
  //     expectedTime: "time",
  //     cost: 20,
  //   },
  //   {
  //     id: "2",
  //     image: "image",
  //     title: "title2",
  //     route: "/pages/municipality-services",
  //     description: "description",
  //     category: "category",
  //     requiredDocs: ["doc1", "doc2"],
  //     expectedTime: "time",
  //     cost: 20,
  //   },
  //   {
  //     id: "3",
  //     image: "image",
  //     title: "title3",
  //     route: "/pages/municipality-services",
  //     description: "description",
  //     category: "category",
  //     requiredDocs: ["doc1", "doc2"],
  //     expectedTime: "time",
  //     cost: 20,
  //   },
  // ];
  return (
    <MKBox component="section" py={2} id="building">
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}></MKTypography>
        </Grid>

        <Grid container spacing={3}>
          {municipalityServices.map((element) => {
            return (
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={element.image}
                  title={element.title}
                  description={element.description}
                  action={{
                    type: "internal",
                    route: element.route,
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
