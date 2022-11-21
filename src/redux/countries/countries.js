// Actions
const SET_COUNTRIES = 'countries/countries/SET_COUNTRIES';
const COUNTRIES_API_LINK = 'https://restcountries.com/v3.1/all';

// Reducer
export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case SET_COUNTRIES:
      return [...action.payload];

    default:
      return state;
  }
}

// Action Creators
const setCountriesAction = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

const fetchCountriesData = () => async (dispatch) => {
  await fetch(COUNTRIES_API_LINK)
    .then((result) => result.json())
    .then((res) => {
      const countries = res.map((item) => ({
        name: {
          common: item.name.common,
          official: item.name.official,
        },
        currencies: item.currencies,
        capital: item.capital,
        capitalInfo: item.capitalInfo,
        languages: item.languages,
        latlng: item.latlng,
        borders: item.borders,
        area: item.area,
        maps: item.maps,
        population: item.population,
        timezones: item.timezones,
        continents: item.continents,
        flags: item.flags,
      }));
      dispatch(setCountriesAction(countries));
    });
};

export { fetchCountriesData };
