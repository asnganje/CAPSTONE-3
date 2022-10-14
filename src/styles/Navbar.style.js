import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  color: steelblue;

  .notify{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }

  .navLink {
    text-decoration: none;
  }
`;

export default NavBarContainer;
