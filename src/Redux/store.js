import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, {
  fetchData,
} from '../features/getCrypto/CryptoSlice'; // eslint-disable-line

const store = configureStore({
  reducer: {
    cryptoCurrency: CryptoReducer,
  },
});
store.dispatch(fetchData());
export default store;
