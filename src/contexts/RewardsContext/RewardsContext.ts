import { createContext } from 'react';

export const DEFAULT_REWARDS = {
  healthPoints: 750,
  rewards: 5,
};

export const RewardsContext = createContext(DEFAULT_REWARDS);

export default RewardsContext;
