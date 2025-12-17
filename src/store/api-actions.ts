import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TOffer } from '../types/offers';
import { RootState } from './store';
import { setAuthorizationStatus } from './action';
import { AuthorizationStatus } from '../const';

type ThunkApiConfig = {
  state: RootState;
  extra: AxiosInstance;
};

type AuthData = {
  email: string;
  password: string;
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

export const checkAuth = createAsyncThunk<
  void,
  void,
  ThunkApiConfig
>(
  'user/checkAuth',
  async (_arg, { extra: api, dispatch }) => {
    try {
      await api.get('/login');
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error: any) {
      if (error.response?.status === 401) {
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      }
    }
  }
);

export const login = createAsyncThunk<
  void,
  AuthData,
  ThunkApiConfig
>(
  'user/login',
  async ({ email, password }, { extra: api, dispatch }) => {
    await api.post('/login', { email, password });
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  }
);
