// src/redux/actions.ts
export enum ActionTypes {
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
  }
  
  export const fetchData = () => ({ type: ActionTypes.FETCH_DATA });
  export const fetchDataSuccess = (data:any) => ({ type: ActionTypes.FETCH_DATA_SUCCESS, data });
  export const fetchDataFailure = (error:any) => ({ type: ActionTypes.FETCH_DATA_FAILURE, error });
  