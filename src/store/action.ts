import {createAction} from '@reduxjs/toolkit';
import { TOffer } from '../types/offers';

export const changeCity = createAction<string>('city/changeCity');
export const loadOffers = createAction<TOffer[]>('offers/loadOffers');
export const changeSort = createAction<string>('sort/changeSort');
export const setHoveredOffer = createAction<string | null>('hoveredOffer/set'); 