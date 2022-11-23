import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import CountryInfo from '../CountryInfo';

describe('Testing the CountryInfo component', () => {
  it('The CountryInfo component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <CountryInfo />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
