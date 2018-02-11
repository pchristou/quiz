// counter.ts
import { Action } from '@ngrx/store';
import {UiActionTypes } from './ui.action';

export interface State {
  loading : boolean
}

const initialState: State = {
  loading : false,
};

export function reducer(state: State = initialState, action: Action) {

  switch (action.type) {
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
