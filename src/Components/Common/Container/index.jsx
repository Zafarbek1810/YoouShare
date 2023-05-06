import React from "react";
import { StyledContainer } from "./Container.style";
import PropTypes from "prop-types";

const Container = ({ children, width, ...props }) => {
  return (
    <StyledContainer width={width} {...props}>
      {children}
    </StyledContainer>
  );
};

Container.proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.number,
};

export default Container;
