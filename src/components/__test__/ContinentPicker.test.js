import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import ContinentPicker from '../ContinentPicker';

describe('Testing the ContinentPicker component', () => {
  it('The ContinentPicker component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <ContinentPicker />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
