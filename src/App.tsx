import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./router/Router";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
