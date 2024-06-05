import { createContext } from 'react';

export const DEFAULT_REWARDS = {
  healthPoints: 0,
  rewards: 0,
};

export const RewardsContext = createContext(DEFAULT_REWARDS);

export default RewardsContext;
