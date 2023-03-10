import React, { useEffect, useState } from "react";
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
import { getUserCitizenServices, deleteService } from "features/citizenService/citizenServiceSlice";
import Loader from "examples/AttentionCatchers/Loader";
import { setSnackbar } from "features/snackBar/snackBarSlice";
import Table from "examples/Table";
import ConfirmationModal from "examples/AttentionCatchers/Modals/ConfirmationModal";
import ViewServiceModal from "./ViewServiceModal";
import EditServiceModal from "./EditServiceModal";
import MKButton from "components/MKButton";

function CitizenService() {
  const dispatch = useDispatch();
  const { UserCitizenServices, isLoading, snackBarSettings } = useSelector(
    (store) => store.citizenServices
  );

  const [openConfirmationModal, setOpenConfirmationModal] = useState([false, undefined]);
  const [openViewnModal, setOpenViewModal] = useState([false, undefined]);
  const [openEditModal, setOpenEditModal] = useState([false, undefined]);
  useEffect(() => {
    if (UserCitizenServices.length == 0) dispatch(getUserCitizenServices());
  }, []);

  // useEffect(() => {
  //   if (UserCitizenServices.length == 0) dispatch(getUserCitizenServices());
  // }, [UserCitizenServices]);

  useEffect(() => {
    dispatch(setSnackbar(snackBarSettings));
  }, [snackBarSettings]);

  const columns = [
    {
      field: "title",
      headerName: "الخدمة",
      type: "string",

      flex: 1,
    },
    {
      field: "location",
      headerName: "المكان",
      type: "string",

      flex: 1,
    },
    {
      field: "description",
      headerName: "الوصف",
      type: "string",

      flex: 1,
    },
    {
      field: "isPublished",
      headerName: "تم النشر",
      type: "boolean",
      flex: 1,
    },
    {
      field: "action",
      type: "actions",
      headerName: "",
      flex: 0.5,
      minWidth: 100,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              size="small"
              onClick={() => {
                setOpenEditModal([true, params.row]);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setOpenViewModal([true, params.row]);
              }}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => {
                setOpenConfirmationModal([true, params.row]);
              }}
            >
              <DeleteForeverIcon color="error" fontSize="small" />
            </IconButton>
          </>
        );
      },
    },
  ];

  const handleDeleteService = (service) => {
    console.log(service._id);
    dispatch(deleteService(service._id));
    setOpenConfirmationModal([false, undefined]);
  };

  const handleEditService = () => {};
  const handleAddService = () => {};
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
          <MKButton
            variant="gradient"
            color="info"
            onClick={() => {
              setOpenEditModal([true, undefined]);
            }}
          >
            إضافة خدمة
          </MKButton>
        </Container>
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
      {openConfirmationModal[0] && (
        <ConfirmationModal
          isOpen={openConfirmationModal[0]}
          closeModal={() => setOpenConfirmationModal([false, undefined])}
          handleSubmit={() => handleDeleteService(openConfirmationModal[1])}
          title="تأكيد الحذف"
          text={`هل انت متأكد انك تريد حذف ${openConfirmationModal[1].title} ؟`}
        />
      )}
      {openViewnModal[0] && (
        <ViewServiceModal
          isOpen={openViewnModal[0]}
          closeModal={() => setOpenViewModal([false, undefined])}
          data={openViewnModal[1]}
        />
      )}
      {openEditModal[0] && (
        <EditServiceModal
          isOpen={openEditModal[0]}
          closeModal={() => setOpenEditModal([false, undefined])}
          data={openEditModal[1]}
          onEdit={handleEditService}
          onAdd={handleAddService}
        />
      )}
    </>
  );
}

export default CitizenService;
