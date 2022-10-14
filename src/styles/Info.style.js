import styled from 'styled-components';

export const InfoContainer = styled.div`
  margin: 2rem auto;
`;

export const Container = styled.div`
  width: 100%;
  color: white;
  margin: 0 auto;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
  }
  .back {
    text-decoration: none;
    padding: 10px;
    margin: 1rem 2rem;
  }
  .nav-back {
    color: #fff;
    font-size: 1.5rem;
    margin: 1rem 2rem;
  }
`;

export const InfoWrapper = styled.div`
  .details:nth-child(odd) {
    color: #fff;
    background-color: steelblue;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  padding: 10px;
`;
