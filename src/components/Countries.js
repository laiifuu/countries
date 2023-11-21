import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { countries, map } = useSelector((state) => state.countries);

  let filtered = countries.filter((item) => item.name.common !== 'Israel');

  if (map !== 'Select a continent') if (countries.length !== 0) filtered = countries.filter((item) => item.continents[0] === map);

  return (
    <ul className="countries-list" data-testid="countries-list">
      {filtered.map((country) => (
        <li className="country-item" key={country.name.common}>
          <Link to={`/countries/${country.name.common}`}>
            <img
              className="flag"
              src={country.flags.png}
              alt={`${country.name.common}'s Flag`}
            />
            <h3 className="country-name">{country.name.common}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
