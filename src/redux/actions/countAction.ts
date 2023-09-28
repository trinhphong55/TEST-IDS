export enum ActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    INCREMENT_ASYNC = 'INCREMENT_ASYNC', 
  }
  
  export const increment = () => ({ type: ActionTypes.INCREMENT });
  export const decrement = () => ({ type: ActionTypes.DECREMENT });
  export const incrementAsync = () => ({ type: ActionTypes.INCREMENT_ASYNC })