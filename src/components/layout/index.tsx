import { Fragment, PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import LoginLogoutButton from "./header/login-logout/LoginLogoutButton";

type TLayout = {
  is_logged_in: boolean;
}

const Layout = ({ children }: PropsWithChildren<TLayout>) => (
  <Fragment>
    <Header />
    {children}
    <LoginLogoutButton />
    <Footer />
  </Fragment>
);

export default Layout;
