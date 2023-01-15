import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
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
import { TextField, MenuItem } from "@mui/material";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { getAllServiceCategories } from "features/serviceCategory/serviceCategorySlice";
import styled from "@emotion/styled";

function EditServiceModal(props) {
  const { closeModal, isOpen, data, onAdd, onEdit } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceCategories("citizen"));
  }, [dispatch]);

  const { categories } = useSelector((store) => store.serviceCategory);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      category: "",
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
      servicePhoneNumber: "",
      pictureGallery: [],
      ...data,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("اسم الخدمة مطلوب"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (data) {
        onAdd(values);
      } else {
        onEdit(values, values._id);
      }
    },
  });
  return (
    <Dialog open={isOpen} onClose={closeModal} fullWidth={true} maxWidth={"md"}>
      <Slide direction="down" in={isOpen} timeout={500}>
        <MKBox>
          <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
            <MKTypography variant="h5">{data ? "تعديل الخدمة" : "اضافة خدمة"}</MKTypography>
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeModal} />
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox p={2}>
            <MKBox component="form" role="form">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    required={true}
                    label="الاسم"
                    name="title"
                    autoFocus={true}
                    value={validation.values.title}
                    onChange={validation.handleChange}
                    error={validation.touched.title && Boolean(validation.errors.title)}
                    helperText={validation.touched.title && validation.errors.title}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MySelect
                    margin="normal"
                    id="mySelect"
                    label="الفئة"
                    name="category"
                    select={true}
                    value={validation.values.category}
                    fullWidth
                    onChange={validation.handleChange}
                    error={validation.touched.category && Boolean(validation.errors.category)}
                    helperText={validation.touched.category && validation.errors.category}
                  >
                    {categories.map((category) => {
                      return (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      );
                    })}
                  </MySelect>
                </Grid>
                <Grid item xs={12}>
                  <DefaultInput
                    label="شرح/تفاصيل الخدمة"
                    name="description"
                    multiline
                    rows={2}
                    value={validation.values.description}
                    onChange={validation.handleChange}
                    error={validation.touched.description && Boolean(validation.errors.description)}
                    helperText={validation.touched.description && validation.errors.description}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    label="رقم  whatsapp إذا توفر"
                    name="whatsAppLink"
                    value={validation.values.whatsAppLink}
                    onChange={validation.handleChange}
                    error={
                      validation.touched.whatsAppLink && Boolean(validation.errors.whatsAppLink)
                    }
                    helperText={validation.touched.whatsAppLink && validation.errors.whatsAppLink}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="servicePhoneNumber"
                    label="الهاتف"
                    value={validation.values.servicePhoneNumber}
                    onChange={validation.handleChange}
                    error={
                      validation.touched.servicePhoneNumber &&
                      Boolean(validation.errors.servicePhoneNumber)
                    }
                    helperText={
                      validation.touched.servicePhoneNumber && validation.errors.servicePhoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    label="العنوان "
                    name="location"
                    value={validation.values.location}
                    onChange={validation.handleChange}
                    error={validation.touched.location && Boolean(validation.errors.location)}
                    helperText={validation.touched.location && validation.errors.location}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="website"
                    label="رابط الموقع الالكتروني إذا توفر"
                    value={validation.values.website}
                    onChange={validation.handleChange}
                    error={validation.touched.website && Boolean(validation.errors.website)}
                    helperText={validation.touched.website && validation.errors.website}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="fbLink"
                    label="رابط صفحة  Facebook إذا توفر"
                    value={validation.values.fbLink}
                    onChange={validation.handleChange}
                    error={validation.touched.fbLink && Boolean(validation.errors.fbLink)}
                    helperText={validation.touched.fbLink && validation.errors.fbLink}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="instaLink"
                    label="رابط صفحة  Instagram إذا توفر"
                    value={validation.values.instaLink}
                    onChange={validation.handleChange}
                    error={validation.touched.instaLink && Boolean(validation.errors.instaLink)}
                    helperText={validation.touched.instaLink && validation.errors.instaLink}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="linkedInLink"
                    label="رابط صفحة  Linkedin إذا توفر"
                    value={validation.values.linkedInLink}
                    onChange={validation.handleChange}
                    error={
                      validation.touched.linkedInLink && Boolean(validation.errors.linkedInLink)
                    }
                    helperText={validation.touched.linkedInLink && validation.errors.linkedInLink}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="linkedInLink"
                    label="رابط صفحة  Linkedin إذا توفر"
                    value={validation.values.linkedInLink}
                    onChange={validation.handleChange}
                    error={
                      validation.touched.linkedInLink && Boolean(validation.errors.linkedInLink)
                    }
                    helperText={validation.touched.linkedInLink && validation.errors.linkedInLink}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="githubLink"
                    label="رابط صفحة  Github إذا توفر"
                    value={validation.values.githubLink}
                    onChange={validation.handleChange}
                    error={validation.touched.githubLink && Boolean(validation.errors.githubLink)}
                    helperText={validation.touched.githubLink && validation.errors.githubLink}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInput
                    name="twitterLink"
                    label="رابط صفحة  Twitter إذا توفر"
                    value={validation.values.twitterLink}
                    onChange={validation.handleChange}
                    error={validation.touched.twitterLink && Boolean(validation.errors.twitterLink)}
                    helperText={validation.touched.twitterLink && validation.errors.twitterLink}
                  />
                </Grid>
              </Grid>

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
    </Dialog>
  );
}

export default EditServiceModal;

EditServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};

const MySelect = styled(TextField)(({ theme }) => ({
  // ".MuiSelect-select": {
  //   padding: "18px 0.75rem !important",
  // },
  // ".MuiOutlinedInput-input": {
  //   padding: "18px 0.75rem !important",
  // },
  // ".MuiSelect-outlined ": {
  //   padding: "18px 0.75rem !important",
  // },
  "#mySelect": {
    padding: "0.75rem !important",
  },
}));
