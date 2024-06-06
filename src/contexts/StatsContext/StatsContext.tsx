import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { storage } from '../../services/storage';

const KEY_ID = {
  CALORIES: 'stats.calories',
  STEPS: 'stats.steps',
  MVPA: 'stats.mvpa',
  SLEEP: 'stats.sleep',
};

const now = new Date();

export const DEFAULT_STATS = {
  calories: 0,
  steps: 0,
  mvpa: 0,
  sleep: 8,
  timestamp: now,
  updateCalories: (_val: number) => {},
  updateSteps: (_val: number) => {},
  updateMvpa: (_val: number) => {},
  updateSleep: (_val: number) => {},
  resetStats: () => {},
};

export const StatsContext = createContext(DEFAULT_STATS);

export const StatsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [calories, setCalories] = useState(DEFAULT_STATS.calories);
  const [steps, setSteps] = useState(DEFAULT_STATS.steps);
  const [mvpa, setMvpa] = useState(DEFAULT_STATS.mvpa);
  const [sleep, setSleep] = useState(DEFAULT_STATS.sleep);
  const [timestamp, setTimestamp] = useState(DEFAULT_STATS.timestamp);

  const updateCalories = useCallback((value: number) => {
    setCalories((calories) => calories + value);
    setTimestamp(new Date());
  }, []);

  const updateSteps = useCallback((value: number) => {
    setSteps((steps) => steps + value);
    setTimestamp(new Date());
  }, []);

  const updateMvpa = useCallback((value: number) => {
    setMvpa((mvpa) => mvpa + value);
    setTimestamp(new Date());
  }, []);

  const updateSleep = useCallback((value: number) => {
    setSleep((sleep) => sleep + value);
    setTimestamp(new Date());
  }, []);

  const resetStats = useCallback(() => {
    setCalories(DEFAULT_STATS.calories);
    setSteps(DEFAULT_STATS.steps);
    setMvpa(DEFAULT_STATS.mvpa);
    setSleep(DEFAULT_STATS.sleep);
    setTimestamp(new Date());
  }, []);

  useEffect(() => {
    storage.set(KEY_ID.CALORIES, calories);
  }, [calories]);

  useEffect(() => {
    storage.set(KEY_ID.STEPS, steps);
  }, [steps]);

  useEffect(() => {
    storage.set(KEY_ID.MVPA, mvpa);
  }, [mvpa]);

  useEffect(() => {
    storage.set(KEY_ID.SLEEP, sleep);
  }, [sleep]);

  // rehydrate
  useEffect(() => {
    const storedCalories = storage.getNumber(KEY_ID.CALORIES);
    if (storedCalories !== undefined) {
      setCalories(storedCalories);
    }

    const storedSteps = storage.getNumber(KEY_ID.STEPS);
    if (storedSteps !== undefined) {
      setSteps(storedSteps);
    }

    const storedMvpa = storage.getNumber(KEY_ID.MVPA);
    if (storedMvpa !== undefined) {
      setMvpa(storedMvpa);
    }

    const storedSleep = storage.getNumber(KEY_ID.SLEEP);
    if (storedSleep !== undefined) {
      setSleep(storedSleep);
    }
  }, []);

  return (
    <StatsContext.Provider
      value={{
        calories,
        steps,
        mvpa,
        sleep,
        timestamp,
        updateCalories,
        updateSteps,
        updateMvpa,
        updateSleep,
        resetStats,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export default StatsContext;
