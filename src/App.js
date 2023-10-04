import logo from './logo.svg';
import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import {NAME} from "./redux/types/types"
import {Fragment} from 'react';
import React, { Suspense } from "react";
import { Routes , Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Fragment>
      <Routes>
      <Route path="/AILabs" element={<Header />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
