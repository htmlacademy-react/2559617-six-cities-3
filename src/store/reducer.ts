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
  sortType: 'popular',
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

      state.offers = [...state.offers].sort((a, b) => {
        switch (state.sortType) {
          case 'price-low-to-high':
            return a.price - b.price;
          case 'price-high-to-low':
            return b.price - a.price;
          case 'top-rated-first':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    })
    .addCase(setHoveredOffer, (state, action) => {
      state.hoveredOfferId = action.payload;
    });
});
