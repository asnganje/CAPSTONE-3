/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  InfoContainer,
  Container,
  InfoWrapper,
  Title,
} from "../../styles/Info.style";

const CryptoDetails = () => {
  const { id } = useParams();

  const { cryptoCurrency, status } = useSelector(
    (state) => state.cryptoCurrency
  );
  return (
    <InfoContainer>
      {status === "pending" ? (
        <div>Loading....</div>
      ) : (
        cryptoCurrency.map((coin) => {
          if (coin.id === id) {
            return (
              <Container key={coin.id}>
                <Link className="back" to="/">
                  <p className="nav-back">← Back</p>
                </Link>
                <div className="main">
                  <div className="submain">
                    <div>
                      <p>
                        <img src={coin.icon} alt="Coin Icon" />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2>Crypto Coin: {coin.name}</h2>
                    <p>Ranked at: Number{coin.rank}</p>
                  </div>
                </div>

                <InfoWrapper>
                  <Title className="details">
                    <p>Coin name</p>
                    <p>{coin.name}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin symbol</p>
                    <p>{coin.symbol}</p>
                  </Title>

                  <Title className="details">
                    <p>Ranking</p>
                    <p>{coin.rank}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin Price</p>
                    <p>{coin.price}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin volume</p>
                    <p>{coin.volum}</p>
                  </Title>

                  <Title className="details">
                    <p>Market cap</p>
                    <p>{coin.marketCap}</p>
                  </Title>

                  <Title className="details">
                    <p>Price change day</p>
                    <p>{coin.priceChange1d}</p>
                  </Title>

                  <Title className="details">
                    <p>Price change Hour</p>
                    <p>{coin.priceChange1h}</p>
                  </Title>

                  <Title className="details">
                    <p>Price change Week</p>
                    <p>{coin.priceChange1w}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin total supply</p>
                    <p>{coin.totalSupply}</p>
                  </Title>

                  <Title className="details">
                    <p>Coin availability Supply</p>
                    <p>{coin.availableSupply}</p>
                  </Title>

                  <Title className="details">
                    <p>Twitter link</p>
                    <p>{coin.twitterUrl}</p>
                  </Title>

                  <Title className="details">
                    <p>Website link</p>
                    <p>{coin.websiteUrl}</p>
                  </Title>
                </InfoWrapper>
              </Container>
            );
          }
          return null;
        })
      )}
    </InfoContainer>
  );
};

export default CryptoDetails;
