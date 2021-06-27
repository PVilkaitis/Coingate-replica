import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import Select from "react-select";

import { styles, stylesPayment, DUMMY_METHODS } from "./SelectStyles";
import "./Form.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Form = ({ rates, cryptos, fiats }) => {
  const [pair, setPair] = useState({
    fiat: "EUR",
    crypto: "BTC",
  });
  const [amounts, setAmounts] = useState({
    fiat: "",
    crypto: "",
  });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (amounts.fiat !== "") {
      fiatHandler(amounts.fiat);
    }
  }, [pair]);

  useEffect(() => {
    if (amounts.fiat.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [amounts]);

  const fiatHandler = (value) => {
    setAmounts({
      fiat: value,
      crypto: (parseInt(value) / rates[pair.crypto][pair.fiat]).toFixed(8),
    });
  };

  const cryptoHandler = (value) => {
    if (value > 0) {
      setAmounts({
        fiat: rates[pair.crypto][pair.fiat] * value,
        crypto: value,
      });
    } else {
      setAmounts({
        fiat: "",
        crypto: "",
      });
    }
  };

  return (
    <div>
      <div className="form-shadow"></div>
      <form className="form">
        {rates.length === 0 ? (
          <div className="loader">
            <Loader type="Oval" color="#5022ED" height={100} width={100} />
          </div>
        ) : (
          <>
            <div className="form-pay">
              <p>Pay</p>
              <input
                type="number"
                value={isNaN(amounts.fiat) ? "" : amounts.fiat}
                onChange={(e) => fiatHandler(e.target.value)}
              ></input>

              <Select
                value={{
                  label: (
                    <div className="react-select">
                      <img
                        src={`https://cryptoicon-api.vercel.app/api/icon/${pair.fiat.toLowerCase()}`}
                        height="15px"
                        width="15px"
                        alt=""
                      />
                      {pair.fiat}
                    </div>
                  ),
                  value: pair.fiat,
                }}
                styles={styles}
                options={fiats}
                onChange={(value) => {
                  setPair({ ...pair, fiat: value.value });
                }}
              />
            </div>
            <div className="form-pay">
              <p>Buy</p>
              <input
                type="number"
                value={isNaN(amounts.crypto) ? "" : amounts.crypto}
                onChange={(e) => cryptoHandler(e.target.value)}
              ></input>

              <Select
                value={{
                  label: (
                    <div className="react-select">
                      <img
                        src={`https://cryptoicon-api.vercel.app/api/icon/${pair.crypto.toLowerCase()}`}
                        height="15px"
                        width="15px"
                        alt=""
                      />
                      {pair.crypto}
                    </div>
                  ),
                  value: pair.crypto,
                }}
                styles={styles}
                options={cryptos}
                onChange={(value) => {
                  setPair({ ...pair, crypto: value.value });
                }}
              />
            </div>
            <p>Payment method</p>
            <Select
              defaultValue={{
                label: (
                  <div className="react-select">
                    <img
                      src="https://www.eurodebit.com/img/sepa.png"
                      width="40px"
                      alt=""
                    />
                    Bank transfer
                  </div>
                ),
                value: "Bank transfer",
              }}
              options={DUMMY_METHODS}
              styles={stylesPayment}
            />

            {enabled === true ? (
              <Link to="/buy">
                <button type="submit" style={{ cursor: "pointer" }}>
                  Buy {pair.crypto}
                </button>
              </Link>
            ) : (
              <button
                type="submit"
                disabled
                style={{ backgroundColor: "#b5b5b5" }}
              >
                Buy {pair.crypto}
              </button>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
