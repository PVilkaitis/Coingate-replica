export const styles = {
  control: (provided) => ({
    ...provided,
    width: 90,
    fontSize: 11,
    border: "none",
    boxShadow: "none",
    outline: "none",
    marginRight: 10,
    background: "none",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black",
    background: "none",
    padding: 0,
    marginRight: 10,
    width: 15,
  }),
  menu: (provided) => ({
    ...provided,
    width: 110,
  }),
};
export const stylesPayment = {
  control: (provided) => ({
    ...provided,
    width: 290,
    fontSize: 12,
    border: "1px solid lightgrey",
    boxShadow: "none",
    outline: "none",
    height: 42,
    borderRadius: 15,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black",
    background: "none",
    padding: 0,
    marginRight: 10,
    width: 15,
  }),
  menu: (provided) => ({
    ...provided,
    width: 290,
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
  }),
};

export const DUMMY_METHODS = [
  {
    label: (
      <div className="react-select">
        <img
          src={"https://www.eurodebit.com/img/sepa.png"}
          width="40px"
          alt=""
        />
        Bank transfer
      </div>
    ),
    value: "Bank transfer",
  },
  {
    label: (
      <div className="react-select">
        <img
          src={
            "https://static-00.iconduck.com/assets.00/paypal-icon-512x322-gkyssz4h.png"
          }
          width="40px"
          alt=""
        />
        PayPal
      </div>
    ),
    value: "PayPal",
  },
  {
    label: (
      <div className="react-select">
        <img
          src={
            "https://www.nicepng.com/png/detail/392-3926074_credit-or-debit-card-visa-mastercard-logo-hd.png"
          }
          width="40px"
          alt=""
        />
        Debit card
      </div>
    ),
    value: "Debit card",
  },
];
