import { useDispatch, useSelector } from 'react-redux';
import { setMapAction } from '../redux/countries/countries';

const ContinentPicker = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries.map);
  const handleSelect = (e) => {
    dispatch(setMapAction(e.target.value));
  };

  const continents = [
    'Africa',
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Oceania',
    'Antarctica',
  ];

  return (
    <select name="continents" defaultValue={state} id="continents" data-testid="select" onChange={(e) => handleSelect(e)}>
      <option disabled value="Select a continent" className="hidden">Select a continent</option>
      {continents.map((item) => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  );
};

export default ContinentPicker;
