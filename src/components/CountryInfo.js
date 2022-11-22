import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
  const state = useSelector((state) => state.countries.countries);
  const { countryName } = useParams();
  const filtered = state.filter((item) => item.name.common === countryName);

  if (filtered.length !== 0) {
    const {
      name,
      currencies,
      capital,
      languages,
      borders,
      area,
      population,
      flags,
    } = filtered[0];

    return (
      <div>
        <h1>{name.official}</h1>
        <img src={flags.png} alt={`${name.common}'s Flag`} />
        <span>
          Capital:
          {capital || 'N/A'}
        </span>
        <span>
          Area:
          {area || 'N/A'}
        </span>
        <span>
          Population:
          {population || 'N/A'}
        </span>
        <div>
          Languages:
          {languages ? (
            <ul>
              {Object.values(languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
        <div>
          Borders:
          {borders ? (
            <ul>
              {borders.map((border) => (
                <li key={border}>{border}</li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
        <div>
          Currencies:
          {currencies ? (
            <ul>
              {Object.entries(currencies).map(([key, value]) => (
                <li key={key}>
                  {`${key}: ${value.name}`}
                  <span>{value.symbol}</span>
                </li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default CountryInfo;
