import { Route, Routes, Navigate } from "react-router-dom";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getTokenSelector } from "~/redux/selectors/userSelector";
import LayoutAuth from "~/layouts/auth";
import LayoutDefault from "~/layouts/default";
import Login from "~/views/Auth/Login";
import Register from "~/views/Auth/Register";
import HomeScreen from "~/views/Home/views";
import UserView from "~/views/User";
import PrivateRoute from "./PrivateRoute";
import SupportScreen from "~/views/Support";
import UploadScreen from "~/views/Upload";
import ForgotPasswordScreen from "~/views/Auth/ForgotPassword";
import ResetPasswordScreen from "~/views/Auth/ResetPassword";
const RootRouter = () => {
  const token = useSelectorShallow(getTokenSelector);
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/user/:id" element={<UserView />} />
          <Route path="/upload" element={<UploadScreen />} />
        </Route>
        <Route path="/dashboard" element={<HomeScreen />} />
      </Route>
      <Route
        path="*"
        element={
          <LayoutDefault>
            <HomeScreen />
          </LayoutDefault>
        }
      />
      <Route
        path="/support/contact"
        element={
          <LayoutDefault>
            <SupportScreen />
          </LayoutDefault>
        }
      />
      <Route path="/auth" element={<LayoutAuth />}>
        <Route
          path="login"
          element={token ? <Navigate to={"/dashboard"} /> : <Login />}
        />
        <Route
          path="register"
          element={token ? <Navigate to={"/dashboard"} /> : <Register />}
        />
        <Route
          path="forgot-password"
          element={
            token ? <Navigate to={"/dashboard"} /> : <ForgotPasswordScreen />
          }
        />
        <Route
          path="reset-password"
          element={
            token ? <Navigate to={"/dashboard"} /> : <ResetPasswordScreen />
          }
        />
      </Route>
    </Routes>
  );
};

export default RootRouter;
