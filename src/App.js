import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './redux/countries/countries';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CountryInfo from './components/CountryInfo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:countryName" element={<CountryInfo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
