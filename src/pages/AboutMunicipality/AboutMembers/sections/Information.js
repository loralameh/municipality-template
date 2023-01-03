// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={6}>
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
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
