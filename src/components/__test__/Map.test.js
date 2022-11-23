import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Map from '../Map';

describe('Testing the Map component', () => {
  it('The Map component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <Map />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
