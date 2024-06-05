import { createContext } from 'react';

export enum Precondition {
  HEART_DISEASE = 'HEART_DISEASE',
  HIGH_CHOLESTEROL = 'HIGH_CHOLESTEROL',
  DIABETES = 'DIABETES',
}

export const DEFAULT_USER = {
  name: 'Jun Jie',
  age: 28,
  language: 'en',
  height: 180.0,
  weight: 67.0,
  preconditions: [
    Precondition.HEART_DISEASE,
    Precondition.HIGH_CHOLESTEROL,
    Precondition.DIABETES,
  ],
};

export const UserContext = createContext(DEFAULT_USER);

export default UserContext;
