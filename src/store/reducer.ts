import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSort, setHoveredOffer } from './action';
import { TOffer } from '../types/offers';
import { CITIES } from '../const';
import { offers as mockOffers } from '../mocks/offers';

export interface OffersState {
  city: string;
  offers: TOffer[];
  sortType: string;
  hoveredOfferId: string | null;
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers: mockOffers,
  sortType: 'Popular',
  hoveredOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setHoveredOffer, (state, action) => {
      state.hoveredOfferId = action.payload;
    });
});
