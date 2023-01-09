import { Link, useParams } from "react-router-dom";

// @mui material components
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

function Service({ services }) {
  const { categoryId } = useParams();

  return (
    <>
      <Grid container spacing={3} my={3}>
        {services.map((element) => {
          return (
            <Grid item key={element._id} xs={12} sm={6} lg={3}>
              <Card sx={cardStyle}>
                <CardHeader title={element.title} />
                <CardContent>
                  <MKTypography my={1} variant="body2" fontWeight="regular" color="secondary">
                    {element.description}
                  </MKTypography>

                  <MKTypography
                    component={Link}
                    to={`/pages/municipality-services/${categoryId}/service/${element._id}`}
                    variant="body2"
                    fontWeight="regular"
                    color="dark"
                    textTransform="capitalize"
                    sx={cardActionStyles}
                  >
                    التفاصيل
                    <Icon sx={{ fontWeight: "bold" }}>arrow_backward</Icon>
                  </MKTypography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

const cardActionStyles = {
  display: "flex",
  alignItems: "center",
  width: "max-content",

  "& .material-icons, .material-icons-round,": {
    transform: `translateX(2px)`,
    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
  },

  "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
    {
      transform: `translateX(6px)`,
    },
};

const cardStyle = {
  transition: "transform 0.7s cubic-bezier(0.34,1.61,0.7,1.3)",
  "&:hover ": {
    transform: "scale(1.05)",
    backgroundColor: "#eee",
  },
};
export default Service;
