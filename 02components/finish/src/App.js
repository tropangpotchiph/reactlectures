import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  const username = 'Kodego';
  return (
    <>
      <Header />
      <div>
        <h1>TropangCharAt64</h1>
      </div>
      <Footer />
    </>
  );
}
