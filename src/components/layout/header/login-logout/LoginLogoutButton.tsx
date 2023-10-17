import { loginUrl } from "Utils/login";

const LoginLogoutButton = () => {
  return <a href={loginUrl()}>login</a>;
};

export default LoginLogoutButton;
