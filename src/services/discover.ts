import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '../screens/Profile';
import { storage } from './storage';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const DISCOVER_BASE_URL = `${BASE_URL}/app/discover`;
const TOKEN = process.env.EXPO_PUBLIC_ACCESS_TOKEN;

export const discoverMeal = async (
  image: string,
  mimeType = 'image/jpg',
  token = TOKEN,
) => {
  try {
    const storedToken = storage.getString(ACCESS_TOKEN_KEY);
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/meal`,
      {
        token: storedToken || token,
        mimeType,
        data: image,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    console.debug(res.data);

    return res.data;
  } catch (err) {
    console.warn(err);
    throw err;
  }
};

export const discoverGroceries = async (
  image: string,
  mimeType = 'image/jpg',
  token = TOKEN,
) => {
  try {
    const storedToken = storage.getString(ACCESS_TOKEN_KEY);
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/groceries`,
      {
        token: storedToken || token,
        mimeType,
        data: image,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    console.debug(res.data);

    return res.data;
  } catch (err) {
    console.warn(err);
    throw err;
  }
};

export const discoverNutrition = async (
  image: string,
  mimeType = 'image/jpg',
  token = TOKEN,
) => {
  try {
    const storedToken = storage.getString(ACCESS_TOKEN_KEY);
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/nutrition`,
      {
        token: storedToken || token,
        mimeType,
        data: image,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    console.debug(res.data);

    return res.data;
  } catch (err) {
    console.warn(err);
    throw err;
  }
};
