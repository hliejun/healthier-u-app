import axios from 'axios';

// const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
const BASE_URL = 'http://192.168.0.145:8000';
const DISCOVER_BASE_URL = `${BASE_URL}/app/discover`;
const TOKEN = process.env.EXPO_PUBLIC_ACCESS_TOKEN;

export const discoverMeal = async (
  image: string,
  mimeType = 'image/jpg',
  token = TOKEN,
) => {
  try {
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/meal`,
      {
        token,
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
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/groceries`,
      {
        token,
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
    const res = await axios.post(
      `${DISCOVER_BASE_URL}/nutrition`,
      {
        token,
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
