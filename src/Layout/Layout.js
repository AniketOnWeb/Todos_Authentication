import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Navbar from "../Components/Navbar";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{Children}</MainWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
