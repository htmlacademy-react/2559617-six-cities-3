import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('city/changeCity');
export const changeSort = createAction<string>('sort/changeSort');
export const setHoveredOffer = createAction<string | null>('hoveredOffer/set');
