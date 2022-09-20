import styled from "styled-components";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Fragment } from "react";

type AppProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
