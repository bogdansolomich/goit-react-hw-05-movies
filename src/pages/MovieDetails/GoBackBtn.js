import React from 'react';
import { Link } from 'react-router-dom';
import { GoBackBtn as StyledGoBackBtn } from './Searchbar/Searchbar.styled';

const GoBackBtn = ({ to, children }) => {
  return (
    <Link to={to}>
      <StyledGoBackBtn>{children}</StyledGoBackBtn>
    </Link>
  );
};

export default GoBackBtn;
