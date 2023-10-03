// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './contactsSlice';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;
