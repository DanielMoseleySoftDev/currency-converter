import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CurrencyRow from "./CurrencyRow";
import StorageTable from "./StorageTable";

const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {
  //Set States
  const [currencyOptions, setcurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [storage, setStorage] = useState([])
  const [tableIsEmpty, setTableIsEmpty] = useState(true);

  //
  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(2)
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const defaultFromCurrency = Object.keys(data.rates).filter(name => name === "GBP")
        const defaultToCurrency = Object.keys(data.rates).filter(name => name === "KRW")
        setcurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(defaultFromCurrency)
        setToCurrency(defaultToCurrency);
        setExchangeRate(data.rates[defaultToCurrency]);
      })
  }, []);

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
      }
    }, [fromCurrency, toCurrency])


  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false);
  }

  function addToStorage() {
    setTableIsEmpty(false)
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;

    const newConversion = {
      time: dateTime,
      toCurrency: toCurrency,
      fromCurrency: fromCurrency,
      toAmount: toAmount,
      fromAmount: fromAmount
    }
    setStorage(prevStorage => {
      return [...prevStorage, newConversion]
    });
  }


  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
      <div className="storeButton">
        <Button onClick={addToStorage} variant="contained" disableElevation>Store</Button>
      </div>
      {!tableIsEmpty && <StorageTable
        storage={storage}
        />
      }

    </div>
  );
}

export default App;
