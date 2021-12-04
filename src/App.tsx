import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.sass'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
