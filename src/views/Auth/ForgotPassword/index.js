import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useActions } from "~/hooks/useActions";
import { forgotPassWordSubmit } from "~/redux/actions/authActions";
import ForgotPasswordScreen from "./view";
const DATA_ERROR = {
  USER_NOT_FOUND: "user-not-found",
  USER_INCORRECT_PASS: "user-incorrect-password",
};
const ForgotPasswordView = () => {
  const navigate = useNavigate();
  const actions = useActions({
    forgotPassWordSubmit,
  });
  const [dataError, setDataError] = useState("");
  const [messageError, setMessageError] = useState();
  const onSubmit = (data) => {
    const opt = {
      email: data.email,
      callback: (res) => {
        if (res) {
          navigate("/auth/reset-password", {
            state: {
              email: data.email,
            },
          });
        }
      },
      errorCb: (res) => {
        if (res) {
          setDataError(res?.data);
        }
      },
    };
    actions.forgotPassWordSubmit({ ...opt });
  };

  useEffect(() => {
    const handleError = () => {
      switch (dataError?.error ? dataError?.error : dataError) {
        case DATA_ERROR.USER_NOT_FOUND:
          setMessageError("User not found");
          break;
        case DATA_ERROR.USER_INCORRECT_PASS:
          setMessageError("User incorrect password");
          break;
        default:
          setMessageError("");
          break;
      }
    };
    handleError();
  }, [dataError]);
  return (
    <ForgotPasswordScreen onForgot={onSubmit} messageError={messageError} />
  );
};

export default memo(ForgotPasswordView);
