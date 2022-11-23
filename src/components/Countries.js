import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { countries, map } = useSelector((state) => state.countries);

  let filtered = [];

  if (map !== 'Select a continent') if (countries.length !== 0) filtered = countries.filter((item) => item.continents[0] === map);

  return (
    <ul className="countries-list">
      {map === 'Select a continent'
        ? <h2>No continent selected</h2>
        : filtered.map((country) => (
          <li className="country-item" key={country.name.common}>
            <Link to={`/countries/${country.name.common}`}>
              <img
                className="flag"
                src={country.flags.png}
                alt={`${country.name.common}'s Flag`}
              />
              <span className="bold">{country.name.common}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Countries;
