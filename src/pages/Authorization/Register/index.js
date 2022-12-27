import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultInput from "components/LOInput";

// example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

//  layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

//validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux call
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "features/user/userSlice";
// import { setSnackbar } from "features/snackBar/snackBarSlice";

function SignInBasic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { snackBarSettings, isLoading, user } = useSelector((store) => store.user);

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("البريد الالكتروني الذي ادخلته غير صالح")
        .required("البريد الالكتروني مطلوب"),
      password: Yup.string().required("كلمة السر مطلوبة"),
      passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "كلمة السر غير مطابقة"),
    }),
    onSubmit: (values) => {
      console.log("login", values);
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  تسجيل المستخدم
                </MKTypography>
              </MKBox>

              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  {/* Name TextField */}
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
                  {/* End of Name TextField */}

                  {/* Email TextField */}
                  <MKBox mb={2}>
                    <DefaultInput
                      required={true}
                      label="البريد الالكتروني"
                      name="email"
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      error={validation.touched.email && Boolean(validation.errors.email)}
                      helperText={validation.touched.email && validation.errors.email}
                    />
                  </MKBox>
                  {/* End of Email TextField */}

                  {/* Password TextField */}
                  <MKBox mb={2}>
                    <DefaultInput
                      required={true}
                      name="password"
                      label="كلمة السر"
                      type="password"
                      autoComplete="current-password"
                      value={validation.values.password}
                      onChange={validation.handleChange}
                      error={validation.touched.password && Boolean(validation.errors.password)}
                      helperText={validation.touched.password && validation.errors.password}
                    />
                  </MKBox>
                  {/* End of Password TextField */}

                  {/* Confirm Password TextField */}
                  <MKBox mb={2}>
                    <DefaultInput
                      required={true}
                      name="password"
                      label="تأكيد كلمة السر"
                      type="password"
                      value={validation.values.passwordConfirmation}
                      onChange={validation.handleChange}
                      error={
                        validation.touched.passwordConfirmation &&
                        Boolean(validation.errors.passwordConfirmation)
                      }
                      helperText={
                        validation.touched.passwordConfirmation &&
                        validation.errors.passwordConfirmation
                      }
                    />
                  </MKBox>
                  {/* End of Confirm Password TextField */}

                  {/* Sign in Button */}
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      onClick={validation.handleSubmit}
                      variant="gradient"
                      color="info"
                      fullWidth
                    >
                      دخول
                    </MKButton>
                  </MKBox>
                  {/* End of Sign in button */}

                  {/* Rigster link */}
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      لديك حساب؟
                      <MKTypography
                        component={Link}
                        to="/pages/authorization/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        ادخل الان
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  {/* End of Rigster link */}
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
