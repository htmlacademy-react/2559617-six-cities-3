import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { TOffer } from '../types/offers';
import { CITIES } from '../const';
import { offers as mockOffers } from '../mocks/offers';

export interface OffersState {
  city: string;
  offers: TOffer[];
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers: mockOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});
