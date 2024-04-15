import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AmountState {
  value?: number;
}

interface CurrencyState {
  value: string;
}
//Currency to convert from from state
const baseCurrencySlice = createSlice({
  name: "baseCurrency",
  initialState: { value: "gbp" } as CurrencyState,
  reducers: {
    setBaseCurrency: (state: CurrencyState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
//Currency to convert to state
const convertCurrencySlice = createSlice({
  name: "convertCurrency",
  initialState: { value: "usd" } as CurrencyState,
  reducers: {
    setConvertCurrency: (
      state: CurrencyState,
      action: PayloadAction<string>
    ) => {
      state.value = action.payload;
    },
  },
});
//State for converted currency amount
const AmountSlice = createSlice({
  name: "amount",
  initialState: { value: 0 } as AmountState,
  reducers: {
    setAmount: (state: AmountState, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});
//State for amount inputted by user
const InputAmountSlice = createSlice({
  name: "inputAmount",
  initialState: { value: 0 } as AmountState,
  reducers: {
    setInputAmount: (state: AmountState, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});
//Exporting actions
export const { setAmount } = AmountSlice.actions;
export const { setBaseCurrency } = baseCurrencySlice.actions;
export const { setConvertCurrency } = convertCurrencySlice.actions;
export const { setInputAmount } = InputAmountSlice.actions;
//Exporting store with reducers
export const store = configureStore({
  reducer: {
    amount: AmountSlice.reducer,
    baseCurrency: baseCurrencySlice.reducer,
    convertCurrency: convertCurrencySlice.reducer,
    inputAmount: InputAmountSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
