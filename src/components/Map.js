import { useSelector } from 'react-redux';

const Map = () => {
  const state = useSelector((state) => state.countries.map);
  let continent;

  switch (state) {
    case 'Africa':
      continent = <i className="fa-solid fa-earth-africa  fa-10x" />;
      break;
    case 'Europe':
      continent = <i className="fa-solid fa-earth-europe  fa-10x" />;
      break;
    case 'North America':
      continent = <i className="fa-solid fa-earth-americas  fa-10x" />;
      break;
    case 'South America':
      continent = <i className="fa-solid fa-earth-americas  fa-10x" />;
      break;
    case 'Asia':
      continent = <i className="fa-solid fa-earth-asia  fa-10x" />;
      break;
    case 'Oceania':
      continent = <i className="fa-solid fa-earth-oceania  fa-10x" />;
      break;
    default:
      continent = <i className="fa-solid fa-globe  fa-10x" />;
      break;
  }

  return <div>{continent}</div>;
};

export default Map;
