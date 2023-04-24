import { useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useActions } from "~/hooks/useActions";
import { changePasswordSubmit } from "~/redux/actions/authActions";
import ResetPasswordScreen from "./view";

const DATA_ERROR = {
  USER_NOT_FOUND: "user-not-found",
  USER_INCORRECT_PASS: "user-incorrect-password",
};

const ResetPasswordView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;

  console.log(">>>location", location);
  const actions = useActions({
    changePasswordSubmit,
  });
  const [dataError, setDataError] = useState("");
  const [messageError, setMessageError] = useState();
  const onSubmit = (data) => {
    const opt = {
      password: data.password,
      email,
      code: data.code,
      callback: (data) => {
        console.log(">>> data", data);
        if (data) {
          navigate("/auth/login");
        }
      },
      errorCb: (data) => {
        if (data) {
          setDataError(data?.data);
        }
      },
    };
    actions.changePasswordSubmit({ ...opt });
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
    <ResetPasswordScreen
      onReset={onSubmit}
      messageError={messageError}
      email={email}
    />
  );
};

export default memo(ResetPasswordView);
