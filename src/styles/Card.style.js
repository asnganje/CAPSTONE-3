import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 1rem 2rem;
`;

export const LeadInfo = styled.div`
  padding: 1rem 2rem;

  .contents {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 1.5;
    padding: 3rem 2rem;
    color: #fff;
  }

  .contents1 {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .contents1 {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.div`
  margin: 2rem auto;
  input {
  }
  .search-box {
    width: 400px;
    padding: 1rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const CoinItem = styled.div`
  height: 300px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem;
  width: 250px;
  border-radius: 10px;
  background-color: orange;
  font-size: 1.2rem;

  .see-more {
    text-decoration: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: 40px;
  width: 85%;
  margin: auto;
  cursor: pointer;
`;
export const IconImage = styled.img`
  width: 50px;
`;
export const CoinInfo = styled.div`
  color: #fff;
`;

export const Button = styled.div`
  padding: 1rem 2rem;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: steelblue;
  margin: 1rem 0;
  text-decoration: none;
`;
export const Loader = styled.div``;
