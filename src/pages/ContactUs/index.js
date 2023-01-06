import React, { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import Navbar from "examples/Navbars";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { TextField, Container, Card } from "@mui/material";

import footerRoutes from "footer.routes";

// Image & icons
import bgImage from "assets/images/shapes/waves-white.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "features/snackBar/snackBarSlice";

function ContactUs() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { snackBarSettings } = useSelector((store) => store.contactUs);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
    }
  }, [dispatch, snackBarSettings, user]);

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
      <Navbar />

      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
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
              إتصل بنا{" "}
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
        <Container>
          <Grid container mt={{ xs: 12, md: 8 }} py={3} spacing={3}>
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
                    واقتراحاتكم واهتماماتكم معنا. ونعدكم بقراءة كل رسالة بعناية ومراعاة جميع وجهات
                    النظر بينما نعمل على تلبية احتياجات بلديتنا . نشكرك على ثقتك بنا. إذا كانت لديك
                    أي أسئلة أخرى ، فلا تتردد في التواصل معنا
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
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="info"
                        startIcon={<EmailIcon />}
                      >
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
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
