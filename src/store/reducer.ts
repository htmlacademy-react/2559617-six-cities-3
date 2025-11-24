import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import { TOffer } from '../types/offers';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';

const OffersState {
  city: CityName,
  offers: offers[],
};


const initialState = {
  city: CITIES[0].name,
  offers: offers[],
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