import React from "react";
import styled from "styled-components";

import Navbar from "../Components/Navbar";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
`;

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{Children}</MainWrapper>
    </>
  );
};

export default Layout;
