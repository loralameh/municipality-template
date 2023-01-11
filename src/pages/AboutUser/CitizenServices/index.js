import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { IconButton } from "@mui/material";
// Image & icons
import bgImage2 from "assets/images/shapes/waves-white.svg";
import { Edit as EditIcon, DeleteForever as DeleteForeverIcon } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { getUserCitizenServices } from "features/citizenService/citizenServiceSlice";
import Loader from "examples/Loader";
import { setSnackbar } from "features/snackBar/snackBarSlice";
import Table from "examples/Table";

function CitizenService() {
  const dispatch = useDispatch();
  const { UserCitizenServices, isLoading, snackBarSettings } = useSelector(
    (store) => store.citizenServices
  );

  useEffect(() => {
    dispatch(getUserCitizenServices());
  }, []);

  useEffect(() => {
    dispatch(setSnackbar(snackBarSettings));
  }, [snackBarSettings]);

  const columns = [
    { field: "title", headerName: "Service", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "isPublished",
      headerName: "Published",
      type: "boolean",
      flex: 1,
    },
    {
      field: "action",
      headerName: "ACTIONS",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              size="small"
              onClick={() => {
                // let newTreatments = treatments.filter((t) => t.id != params.row.id);
                // setTreatments(newTreatments);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                // let newTreatments = treatments.filter((t) => t.id != params.row.id);
                // setTreatments(newTreatments);
              }}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => {
                // let newTreatments = treatments.filter((t) => t.id != params.row.id);
                // setTreatments(newTreatments);
              }}
            >
              <DeleteForeverIcon color="error" fontSize="small" />
            </IconButton>
          </>
        );
      },
    },
  ];
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
              عرض اعمالي /خدماتي
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
        <Container sx={{ p: 3 }}>
          {UserCitizenServices.length > 0 && (
            <Table
              isLoading={isLoading}
              columns={columns}
              rows={UserCitizenServices}
              getRowId={(row) => row._id}
            />
          )}
          {UserCitizenServices.length == 0 && (
            <MKBox minHeight="10rem" justifyContent="center" alignItems="center" display="flex">
              لم يتم اضافة أي خدمات
            </MKBox>
          )}
        </Container>
      </Card>
    </>
  );
}

export default CitizenService;
