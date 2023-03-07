import React, { useState } from "react";
import { setAmount } from "./store";
import type { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import FormComponent from "./components/FormComponent";

const App = () => {
  //Api state
  const [data, setData] = useState();
  //Redux dispatch and useSelectors
  const dispatch = useDispatch();
  const reduxInputAmount = useSelector(
    (state: RootState) => state.inputAmount.value
  );
  const reduxBaseCurrency = useSelector(
    (state: RootState) => state.baseCurrency.value
  );
  const reduxConvertCurrency = useSelector(
    (state: RootState) => state.convertCurrency.value
  );

  //Currency conversion logic function
  const conversionLogic = (data: any) => {
    const conversionRate: number = data[reduxConvertCurrency]?.rate;
    const finalAmount = +(reduxInputAmount * Number(conversionRate)).toFixed(2);
    return finalAmount;
  };

  //Async API call
  async function getData() {
    try {
      const response = await fetch(
        `http://www.floatrates.com/daily/${reduxBaseCurrency}.json`
      );
      const data = await response.json();
      setData(data);
      dispatch(setAmount(conversionLogic(data)));
      //Basic error handling
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  return (
    <Layout>
      <FormComponent getData={getData} />
    </Layout>
  );
};

export default App;
