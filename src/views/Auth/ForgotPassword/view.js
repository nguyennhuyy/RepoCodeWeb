import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import { Container, BoxTop, BoxForm, CardShadow, FormSubmit } from "./styles";
import { Formik } from "formik";
import { FORGOT_FORM_SCHEME } from "~/helpers/validate";
import WebInput from "~/components/WebInput";
import WebError from "~/components/WebError";
const ForgotPasswordScreen = ({ onForgot, messageError }) => {
  return (
    <Container>
      <BoxTop>
        <WebHeading
          fontSize={40}
          fontWeight={600}
          textAlign={"center"}
          margin={"0 0 0 0"}
        >
          Forgot your password?
        </WebHeading>
      </BoxTop>
      <BoxForm>
        <CardShadow>
          <WebText fontSize={18} fontWeight={500} margin={"10px 0 20px 0"}>
            Fear not. We’ll email you instructions to reset your password.
          </WebText>
          <WebError error={messageError} />

          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={FORGOT_FORM_SCHEME}
            onSubmit={onForgot}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <FormSubmit>
                <WebInput
                  label={"Email"}
                  type={"email"}
                  styles={{
                    width: "100%",
                    marginBottom: "16px",
                  }}
                  value={values.email}
                  onChange={handleChange("email")}
                  touched={touched.email}
                  messageError={errors.email}
                />

                <Button
                  variant="contained"
                  sx={{
                    width: "max-content",
                    margin: "0 auto",
                    padding: "12px 48px",
                    fontFamily: "Poppins, sans-serif",
                    borderRadius: 999,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "20px",
                  }}
                  onClick={handleSubmit}
                >
                  Send
                </Button>
                <WebText textAlign={"center"}>
                  This form is protected by hCaptcha and its
                  <Link to={"/"} style={{ fontWeight: 500 }}>
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                  and
                  <Link to={"/"} style={{ fontWeight: 500 }}>
                    {" "}
                    Terms of Service{" "}
                  </Link>{" "}
                  apply.
                </WebText>
              </FormSubmit>
            )}
          </Formik>
        </CardShadow>
      </BoxForm>
    </Container>
  );
};

export default ForgotPasswordScreen;
