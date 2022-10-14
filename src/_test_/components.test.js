import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import CryptoDetails from '../components/Details/CryptoDetails';
import store from '../Redux/store';

describe('Testing for all components', () => {
  it('Testing for the Home Components', () => {
    const UI = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<Home />} />
          </Routes>
        </Router>
      </Provider>,
    );
    expect(UI).toMatchSnapshot();
  });

  it('Testing for the CryptoDetails component', () => {
    const UI = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<CryptoDetails />} />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(UI).toMatchSnapshot();
  });

  it('Testing the Navbar component', () => {
    const NavBar = render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(NavBar).toMatchSnapshot();
  });
});
