import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ROCKETS_FEATURE_KEY,
  RocketsState
} from './rockets.reducer';

// Lookup the 'Rockets' feature state managed by NgRx
const getRocketsState = createFeatureSelector<RocketsState>(
  ROCKETS_FEATURE_KEY
);

const getRockets = createSelector(
  getRocketsState,
  (state: RocketsState) => state.list
);

const getQuery = createSelector(
  getRocketsState,
  (state: RocketsState) => state.searchQuery
);

export const rocketsQuery = {
  getRockets,
  getQuery
};
