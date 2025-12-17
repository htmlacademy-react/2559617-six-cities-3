import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TOffer } from '../types/offers';
import { RootState } from './store';

type ThunkApiConfig = {
  state: RootState;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<
  TOffer[],
  void,
  ThunkApiConfig
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffer[]>('/offers');
    return data;
  }
);
