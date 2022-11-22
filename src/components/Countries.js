import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { countries, map } = useSelector((state) => state.countries);

  let filtered = [];

  if (map !== 'Select a continent') if (countries.length !== 0) filtered = countries.filter((item) => item.continents[0] === map);

  return (
    <ul>
      {map === 'Select a continent'
        ? countries.map((country) => (
          <li key={country.name.common}>
            <Link to={`/countries/${country.name.common}`}>
              <img
                src={country.flags.png}
                alt={`${country.name.common}'s Flag`}
              />
              <span>{country.name.common}</span>
            </Link>
          </li>
        ))
        : filtered.map((country) => (
          <li key={country.name.common}>
            <Link to={`/countries/${country.name.common}`}>
              <img
                src={country.flags.png}
                alt={`${country.name.common}'s Flag`}
              />
              <span>{country.name.common}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Countries;
