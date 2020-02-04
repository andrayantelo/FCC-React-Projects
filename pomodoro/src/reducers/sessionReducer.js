import { UPDATE_SESSION } from '../actions/types';

export default (session=5*1000, action) => {
    switch(action.type) {
        case UPDATE_SESSION:
            return action.payload;
        default:
            return session;
    }
}