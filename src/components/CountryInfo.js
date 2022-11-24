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
      <div className="country-info">
        <h1>{name.official}</h1>
        <img src={flags.png} alt={`${name.common}'s Flag`} />
        <div>
          Capital:
          <span className="bold">{capital || 'N/A'}</span>
        </div>
        <div>
          {' '}
          Area:
          <span className="bold">
            {`${area} km²` || 'N/A'}
          </span>
        </div>
        <div>
          Population:
          <span className="bold">
            {population || 'N/A'}
          </span>
        </div>
        <div className="languages">
          Languages:
          {languages ? (
            <ul>
              {Object.values(languages).map((language) => (
                <li className="bold" key={language}>
                  {language}
                  ,
                </li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
        <div className="borders">
          Borders:
          {borders ? (
            <ul>
              {borders.map((border) => (
                <li className="bold" key={border}>{border}</li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
        <div className="currencies">
          Currencies:
          {currencies ? (
            <ul>
              {Object.entries(currencies).map(([key, value]) => (
                <li className="bold" key={key}>
                  {`${key}: ${value.name}`}
                  <span className="symbol">{value.symbol}</span>
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
