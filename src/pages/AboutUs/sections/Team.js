// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/labib.jpg";
import team2 from "assets/images/shawki.jpg";
import team3 from "assets/images/sal7a.jpg";
import team4 from "assets/images/kakhi.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="secondary"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              أعضاء البلدية
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              كلمة أعضاء البلدية مجتمعين
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="لبيب محمود الحمرا"
                position={{ color: "info", label: "رئيس البلدية" }}
                description=" يجب ان تضاف هنا... كلمة الريس لبيب "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="شوقي فواز أبو ترابي"
                position={{ color: "info", label: "أمين سر" }}
                description="يجب ان تضاف هنا..."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="يوسف محمد أبو صالح"
                position={{ color: "info", label: "أمين سر" }}
                description="يجب ان تضاف هنا..."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="سامر فواز الكاخي"
                position={{ color: "info", label: "أمين سر" }}
                description="يجب ان تضاف هنا..."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
