import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Navbar from "../Components/Navbar";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
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
  Children: PropTypes.node.isRequired
};

export default Layout;
