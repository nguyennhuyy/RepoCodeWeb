import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import { Container, BoxTop, BoxForm, CardShadow, FormSubmit } from "./styles";
import { Formik } from "formik";
import { CHANGE_PASS_FORM_SCHEME } from "~/helpers/validate";
import WebInput from "~/components/WebInput";
import WebError from "~/components/WebError";
const ResetPasswordScreen = ({ onReset, messageError, email }) => {
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
          <WebText
            fontSize={18}
            fontWeight={500}
            margin={"10px 0 20px 0"}
            textAlign="center"
          >
            We have emailed the code: {`${email}`}
          </WebText>
          <WebError error={messageError} />

          <Formik
            initialValues={{
              code: "",
              password: "",
              re_password: "",
            }}
            validationSchema={CHANGE_PASS_FORM_SCHEME}
            onSubmit={onReset}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <FormSubmit>
                <WebInput
                  label={"Code"}
                  type={"number"}
                  styles={{
                    width: "100%",
                    marginBottom: "16px",
                  }}
                  value={values.code}
                  onChange={handleChange("code")}
                  touched={touched.code}
                  messageError={errors.code}
                />
                <WebInput
                  label={"New Password"}
                  type={"password"}
                  styles={{
                    width: "100%",
                    marginBottom: "16px",
                  }}
                  value={values.password}
                  onChange={handleChange("password")}
                  touched={touched.password}
                  messageError={errors.password}
                />
                <WebInput
                  label={"Confirm Password"}
                  type={"password"}
                  styles={{
                    width: "100%",
                    marginBottom: "16px",
                  }}
                  value={values.re_password}
                  onChange={handleChange("re_password")}
                  touched={touched.re_password}
                  messageError={errors.re_password}
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

export default ResetPasswordScreen;
