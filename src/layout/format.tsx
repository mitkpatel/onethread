import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Format = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex flex-col items-center">
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Format;
