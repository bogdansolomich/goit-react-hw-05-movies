import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/styled/Container';
import { GlobalStyle } from 'components/styled/Globalstyle';
import { StyledHeader, NavList, StyledLink } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <nav>
            <NavList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavList>
          </nav>
        </Container>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
