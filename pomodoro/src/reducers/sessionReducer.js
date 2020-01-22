import { UPDATE_SESSION } from '../actions/types';

export default (session=true, action) => {
    switch(action.type) {
        case UPDATE_SESSION:
            return !session;
        default:
            return session;
    }
}