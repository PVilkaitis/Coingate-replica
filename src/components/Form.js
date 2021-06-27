import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import "./Form.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Form = ({ currencies, rates }) => {
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
              <select
                className="form-select"
                onChange={(e) => {
                  setPair({ ...pair, fiat: e.target.value });
                }}
                value={pair.fiat}
              >
                <option value="EUR" hidden>
                  EUR
                </option>
                {currencies.map((item) =>
                  item.kind === "fiat" ? (
                    <option key={uuidv4()} value={item.symbol}>
                      {item.symbol}
                    </option>
                  ) : null
                )}
              </select>
            </div>
            <div className="form-pay">
              <p>Buy</p>
              <input
                type="number"
                value={isNaN(amounts.crypto) ? "" : amounts.crypto}
                onChange={(e) => cryptoHandler(e.target.value)}
                maxLength={11}
              ></input>
              <select
                className="form-select"
                onChange={(e) => {
                  setPair({ ...pair, crypto: e.target.value });
                }}
                value={pair.crypto}
              >
                <option value="BTC" hidden>
                  BTC
                </option>
                {currencies.map((item) =>
                  item.kind === "crypto" ? (
                    <option key={uuidv4()} value={item.symbol}>
                      {item.symbol}
                    </option>
                  ) : null
                )}
              </select>
            </div>
            <p>Payment method</p>
            <select className="form-payment" name="paymentMethod">
              <option value="BankTransfer">Bank transfer</option>
              <option value="PayPal">PayPal</option>
              <option value="DebitCard">Debit card</option>
            </select>

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
