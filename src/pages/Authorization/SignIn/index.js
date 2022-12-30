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
import { setSnackbar } from "features/snackBar/snackBarSlice";

function SignInBasic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { snackBarSettings, isLoading, user } = useSelector((store) => store.user);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  useEffect(() => {
    if (user) {
      dispatch(setSnackbar(snackBarSettings));
      navigate("/");
    }
  }, [user, dispatch, navigate, snackBarSettings]);

  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("البريد الالكتروني الدي ادخلته غير صالح")
        .required("البريد الالكتروني مطلوب"),
      password: Yup.string().required("كلمة السر مطلوبة"),
    }),
    onSubmit: (values) => {
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
                  دخول المستخدم
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <DefaultInput
                      required={true}
                      label="البريد الالكتروني"
                      name="email"
                      autoFocus={true}
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      error={validation.touched.email && Boolean(validation.errors.email)}
                      helperText={validation.touched.email && validation.errors.email}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <DefaultInput
                      name="password"
                      label="كلمة السر"
                      type="password"
                      value={validation.values.password}
                      onChange={validation.handleChange}
                      error={validation.touched.password && Boolean(validation.errors.password)}
                      helperText={validation.touched.password && validation.errors.password}
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp; تذكرني
                    </MKTypography>
                  </MKBox>
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
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      ليس لديك حساب؟
                      <MKTypography
                        component={Link}
                        to="/pages/authorization/register"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        سجل حساب
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
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
