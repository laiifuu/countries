import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

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
      gmaps,
    } = filtered[0];

    return (
      <div className="country-info-container">
        <div className="country-info">
          <img
            src={flags.png}
            alt={`${name.common}'s Flag`}
            className="info-flag"
          />
          <div className="country-data">
            <h2>{name.official}</h2>
            <div>
              <span className="data-title">Capital: </span>
              <span className="bold">{capital || 'N/A'}</span>
            </div>
            <div>
              {' '}
              <span className="data-title">Area: </span>
              <span className="bold">{`${area} km²` || 'N/A'}</span>
            </div>
            <div>
              <span className="data-title">Population: </span>
              <span className="bold">{population || 'N/A'}</span>
            </div>
            <div className="languages">
              <span className="data-title">Languages: </span>
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
              <span className="data-title">Borders: </span>
              {borders ? (
                <ul>
                  {borders.map((border) => (
                    <li className="bold" key={border}>
                      {border}
                      ,
                    </li>
                  ))}
                </ul>
              ) : (
                'N/A'
              )}
            </div>
            <div className="currencies">
              <span className="data-title">Currencies: </span>
              {currencies ? (
                <ul>
                  {Object.entries(currencies).map(([key, value]) => (
                    <li className="bold" key={key}>
                      -
                      {' '}
                      {`${key}: ${value.name}`}
                      {' '}
                      (
                      {value.symbol}
                      )
                    </li>
                  ))}
                </ul>
              ) : (
                'N/A'
              )}
            </div>
            <div className="data-title">
              Check on
              {' '}
              <span>
                {' '}
                <a href={gmaps} target="_blank" rel="noreferrer">
                  Google Maps
                  {' '}
                  {' '}
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </span>
            </div>
          </div>
        </div>

        <Link to="/" className="back-button">
          BACK TO LIST
        </Link>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default CountryInfo;
