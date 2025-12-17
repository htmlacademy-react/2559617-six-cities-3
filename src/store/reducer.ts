import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSort, setHoveredOffer, setAuthorizationStatus } from './action';
import { fetchOffers } from './api-actions';
import { TOffer } from '../types/offers';
import { CITIES, AuthorizationStatus } from '../const';

export interface OffersState {
  city: string;
  offers: TOffer[];
  sortType: string;
  hoveredOfferId: string | null;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers: [],
  sortType: 'popular',
  hoveredOfferId: null,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })

    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setHoveredOffer, (state, action) => {
      state.hoveredOfferId = action.payload;
    })

    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
