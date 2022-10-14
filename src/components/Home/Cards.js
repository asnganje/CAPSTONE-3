import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Header,
  LeadInfo,
  InputSearch,
  CardContainer,
  CoinItem,
  Icon,
  IconImage,
  CoinInfo,
  Button,
  Loader,
  Container,
  Wrapper,
} from '../../styles/Card.style';

function CryptoCoins() {
  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency,
  );

  const [searchcoin, setSearchcoin] = useState('');
  const onSearchItem = (e) => {
    setSearchcoin(e.target.value);
  };
  const searchItem = cryptoCurrency.filter(
    (filteredItem) => filteredItem.name.toLowerCase().includes(searchcoin.toLowerCase())
      || filteredItem.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  return (
    <Container>
      <Header>
        <LeadInfo>
          {cryptoCurrency.map((btc) => {
            if (btc.id === 'bitcoin') {
              return (
                <div key={btc.id} className="contents">
                  <div>
                    <img src={btc.icon} alt="btc" />
                    <h2>
                      {btc.name}
                      {' '}
                      Price
                    </h2>
                    <p>
                      $
                      {btc.price}
                    </p>
                  </div>
                  <div className="contents1">
                    <p>
                      Available:
                      {btc.availableSupply}
                    </p>
                    <p>
                      Total:
                      {btc.totalSupply}
                    </p>
                    <p>
                      Hourly Price Change:
                      {btc.priceChange1h}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </LeadInfo>
      </Header>
      <Wrapper>
        <InputSearch>
          <input
            className="search-box"
            placeholder="Enter Name"
            type="text"
            value={searchcoin}
            onChange={onSearchItem}
          />
        </InputSearch>
        <CardContainer>
          {status === 'pending' ? (
            <Loader className="loader">
              Loading
              <span />
            </Loader>
          ) : (
            searchItem.map((coin) => (
              <CoinItem key={coin.id}>
                <Icon>
                  <IconImage src={coin.icon} alt="Icon" />
                </Icon>
                <CoinInfo>
                  <p>
                    Number
                    {coin.rank}
                  </p>
                  <h2>{coin.name}</h2>
                  <p>{coin.symbol}</p>
                  <p>
                    $
                    {coin.price.toFixed(2)}
                  </p>
                </CoinInfo>
                <Link to={`${coin.id}`} className="see-more">
                  <Button>
                    <p>➡</p>
                  </Button>
                </Link>
              </CoinItem>
            ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default CryptoCoins;
