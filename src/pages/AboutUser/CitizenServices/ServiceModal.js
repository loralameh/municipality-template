import { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import CircularProgress from "@mui/material/CircularProgress";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";
import DefaultInput from "components/LOInput";
function ServiceModal(props) {
  const { closeModal, isOpen, data, onSubmit } = props;

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      isPublished: "",
      location: "",
      fbLink: "",
      instaLink: "",
      linkedInLink: "",
      githubLink: "",
      twitterLink: "",
      whatsAppLink: "",
      website: "",

      pictureGallery: [],
      ...data,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("اسم الخدمة مطلوب"),
    }),
    onSubmit: (values) => {
      console.log(values);
      onSubmit(values);
    },
  });
  return (
    <Modal open={isOpen} onClose={closeModal} sx={{ display: "grid", placeItems: "center" }}>
      <Slide direction="down" in={isOpen} timeout={500}>
        <MKBox
          position="relative"
          width="500px"
          display="flex"
          flexDirection="column"
          borderRadius="xl"
          bgColor="white"
          shadow="xl"
        >
          <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
            <MKTypography variant="h5">تعديل الملف الشخصي</MKTypography>
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeModal} />
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox p={2}>
            <MKBox component="form" role="form">
              <MKBox mb={2}>
                <DefaultInput
                  required={true}
                  label="الاسم"
                  name="name"
                  autoFocus={true}
                  value={validation.values.name}
                  onChange={validation.handleChange}
                  error={validation.touched.name && Boolean(validation.errors.name)}
                  helperText={validation.touched.name && validation.errors.name}
                />
              </MKBox>

              <MKBox mb={2}>
                <DefaultInput
                  name="phoneNumber"
                  label="الهاتف "
                  value={validation.values.phoneNumber}
                  onChange={validation.handleChange}
                  error={validation.touched.phoneNumber && Boolean(validation.errors.phoneNumber)}
                  helperText={validation.touched.phoneNumber && validation.errors.phoneNumber}
                />
              </MKBox>

              <MKBox mb={2}>
                <DefaultInput
                  label="المستوى العلمي"
                  name="education"
                  value={validation.values.education}
                  onChange={validation.handleChange}
                  error={validation.touched.education && Boolean(validation.errors.education)}
                  helperText={validation.touched.education && validation.errors.education}
                />
              </MKBox>

              <MKBox mb={2}>
                <DefaultInput
                  name="address"
                  label="عنوان السكن  "
                  value={validation.values.address}
                  onChange={validation.handleChange}
                  error={validation.touched.address && Boolean(validation.errors.address)}
                  helperText={validation.touched.address && validation.errors.address}
                />
              </MKBox>

              <MKBox mb={2}>
                <DefaultInput
                  name="career"
                  label="المهنة"
                  value={validation.values.career}
                  onChange={validation.handleChange}
                  error={validation.touched.career && Boolean(validation.errors.career)}
                  helperText={validation.touched.career && validation.errors.career}
                />
              </MKBox>
              {/* 
              <MKBox mt={4} mb={1}>
                <MKButton
                  onClick={validation.handleSubmit}
                  variant="gradient"
                  color="info"
                  fullWidth
                  disabled={isLoading}
                  endIcon={
                    isLoading ? <CircularProgress size={10} sx={{ color: "000nk" }} /> : null
                  }
                >
                  دخول
                </MKButton>
              </MKBox> */}
            </MKBox>
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox display="flex" justifyContent="flex-start" gap={1} p={1.5}>
            <MKButton variant="gradient" color="info" onClick={validation.handleSubmit}>
              حفظ
            </MKButton>
            <MKButton variant="gradient" color="secondary" onClick={closeModal}>
              إغلاق
            </MKButton>
          </MKBox>
        </MKBox>
      </Slide>
    </Modal>
  );
}

export default ServiceModal;

ServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};
