import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../../utils/testUtilities';
import App from '../../App';

describe('Testing the App component', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('Checking if the HomePage renders correctly ', () => {
    const homeLink = screen.getByText('HOME');
    expect(homeLink).toBeTruthy();
    const aboutLink = screen.getByText('ABOUT');
    expect(aboutLink).toBeTruthy();
    const select = screen.getByText('Select a continent');
    expect(select).toBeTruthy();
  });

  it('Checking that the countries will be rendered after selecting a continent ', () => {
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Africa' } });
    const countriesList = screen.getByTestId('countries-list');
    expect(countriesList).toBeTruthy();
    expect(countriesList.childElementCount).toBe(1);
  });

  it('Checking that the country info page will be rendered after selecting a country:', () => {
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Africa' } });
    const countriesList = screen.getByTestId('countries-list');
    expect(countriesList).toBeTruthy();
    const algerianFlag = screen.getByAltText("Algeria's Flag");
    fireEvent.click(algerianFlag);
    const name = screen.getByText("People's Democratic Republic of Algeria");
    expect(name).toBeTruthy();
    const currency = screen.getByText('- DZD: Algerian dinar (د.ج)');
    expect(currency).toBeTruthy();
  });
});
