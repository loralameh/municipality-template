import React, { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultInput from "components/LOInput";
import { Button, TextField } from "@mui/material";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image & icons
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { createContactUsMessage } from "features/contact-us/ContactUsSlice";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function ContactUs() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings, isLoading } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings]);

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string().required("البريد الالكتروني مطلوب"),
      message: Yup.string().required("الرسالة مطلوبة"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("login", values);
      // dispatch(createContactUsMessage(values));
      resetForm();
    },
  });
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/pages/authorization/sign-in",
            label: "دخول",
            color: "info",
          }}
          sticky
        />
      </MKBox>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                تواصل معنا عبر البريد الالكتروني{" "}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                نحن نقدر آراء وتعليقات أهالي البلد. يرجى استخدام النموذج المقدم لمشاركة أفكاركم
                واقتراحاتكم واهتماماتكم معنا. ونعدكم بقراءة كل رسالة بعناية ومراعاة جميع وجهات النظر
                بينما نعمل على تلبية احتياجات بلديتنا . نشكرك على ثقتك بنا. إذا كانت لديك أي أسئلة
                أخرى ، فلا تتردد في التواصل معنا
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="standard"
                      InputLabelProps={{ shrink: true }}
                      name="name"
                      label="الاسم "
                      fullWidth={true}
                      required={true}
                      autoFocus={true}
                      value={validation.values.name}
                      onChange={validation.handleChange}
                      error={validation.touched.name && Boolean(validation.errors.name)}
                      helperText={validation.touched.name && validation.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      variant="standard"
                      InputLabelProps={{ shrink: true }}
                      name="email"
                      label="البريد الالكتروني"
                      fullWidth={true}
                      required={true}
                      autoFocus={false}
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      error={validation.touched.email && Boolean(validation.errors.email)}
                      helperText={validation.touched.email && validation.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      InputLabelProps={{ shrink: true }}
                      name="message"
                      label="الرسالة"
                      placeholder="كيف يمكننا مساعدتك ..."
                      fullWidth
                      margin="normal"
                      multiline
                      rows="4"
                      value={validation.values.message}
                      onChange={validation.handleChange}
                      error={validation.touched.message && Boolean(validation.errors.message)}
                      helperText={validation.touched.message && validation.errors.message}
                    />
                  </Grid>
                </Grid>

                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info" startIcon={<EmailIcon />}>
                    إرسال
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 20, sm: 18, md: 20 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="success"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography variant="h3" color="white">
                    تواصل معنا عبر الواتس اب{" "}
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography variant="body2" color="text" mb={3}>
                    تواصل معنا عبر واتساب لنكون في خدمتك.
                  </MKTypography>
                  <MKBox width="100%" component="form" method="post" autocomplete="off">
                    <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                      <MKButton
                        component="a"
                        href="//api.whatsapp.com/send?phone=96171441965&text=مرحبا!"
                        target="_blank"
                        rel="noreferrer"
                        variant="gradient"
                        color="success"
                        startIcon={<WhatsAppIcon />}
                      >
                        إرسال
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid item xs={12}>
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 20, sm: 18, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="secondary"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography variant="h3" color="white">
                    الأسئلة الشائعة
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography variant="body2" color="text" mb={3}>
                    ابحث عن إجابات لأسئلتك الشائعة
                  </MKTypography>
                  <MKBox width="100%" component="form" method="post" autocomplete="off">
                    <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                      <MKButton
                        component="a"
                        href="//api.whatsapp.com/send?phone=96171441965&text=مرحبا!"
                        target="_blank"
                        rel="noreferrer"
                        variant="gradient"
                        color="secondary"
                        startIcon={<LiveHelpIcon />}
                      >
                        إقرأ
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
