import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import FormSelect from "./FormSelect";
import { setBaseCurrency, setConvertCurrency, setInputAmount } from "../store";
import currencies from "../currencies.json";
import "../index.css";
import Button from "./Button";

interface IProps {
  getData: () => Promise<void>;
}
const FormComponent = ({ getData }: IProps) => {
  //Redux dispatch and useSelectors
  const dispatch = useDispatch();
  const reduxFinalAmount = useSelector(
    (state: RootState) => state.amount.value
  );
  const reduxInputAmount = useSelector(
    (state: RootState) => state.inputAmount.value
  );
  const reduxBaseCurrency = useSelector(
    (state: RootState) => state.baseCurrency.value
  );
  const reduxConvertCurrency = useSelector(
    (state: RootState) => state.convertCurrency.value
  );
  //On button click call API function
  function onSubmit() {
    getData();
  }
  //Logic for removing non numeric values from currency input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      dispatch(setInputAmount(Number(e.target.value)));
    }
  };

  return (
    <>
      <form>
        <FormSelect
          header="I have"
          selectValue={reduxBaseCurrency}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setBaseCurrency(e.target.value))
          }
          selectOptions={currencies}
        />
        <FormSelect
          header="I want"
          selectValue={reduxConvertCurrency}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setConvertCurrency(e.target.value))
          }
          selectOptions={currencies}
        />
        <label>
          Amount:
          <input
            value={reduxInputAmount}
            onChange={handleInputChange}
            type="text"
          />{" "}
        </label>
      </form>
      {reduxBaseCurrency !== reduxConvertCurrency ? (
        <p className="declare">Conversion = {reduxFinalAmount}</p>
      ) : (
        <p className="declare">Please select two different currencies</p>
      )}
      <Button className="button" onClick={onSubmit} content="Submit" />
    </>
  );
};

export default FormComponent;
