import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AppBarWrapper = styled.div`
  background-color: ${palette.grey[200]};
  padding: 1rem;
`;

const LinkWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
`;

const StyledLink = styled(Link)`
  margin-right: 1rem;
`;

const AdminAppbar = () => {
  return (
    <AppBarWrapper>
      <LinkWrapper>
        <StyledLink to="/admin">광고목록</StyledLink>
        <StyledLink to="/admin/users">유저목록</StyledLink>
        <StyledLink to="/admin/add">광고추가</StyledLink>
      </LinkWrapper>
    </AppBarWrapper>
  );
};

export default AdminAppbar;