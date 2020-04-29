import { ADD_EVENT } from './actionTypes';

export const addEvent = (events) => {
    return {
        type: ADD_EVENT,
        payload: events
    }
}