import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-main);
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div>Logo</div>
      <nav>
        <ul>
          <li>1</li>
          <li>3</li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
