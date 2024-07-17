// ./src/App.jsx
import React, { useState, useEffect } from 'react';
import CustomerTable from './components/CutomerTable';
import TransactionChart from './components/TransactionChart';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [filterAmount, setFilterAmount] = useState('');

  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch('http://localhost:3003/customers') // Replace with your actual API endpoint
  //     .then(response => {
  //       response.json()
  //       console.log(response);
  //     })

  //     .then(data => setCustomers(data));
  // }, []);
  
  return <>
      <Navbar/>
      <CustomerTable/>
      <Footer/>
  
    </>
};

export default App;
