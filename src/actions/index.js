import { ACTION_SAY_LAL } from '../constants';

export const sayLal = () => {
    return {
        type: ACTION_SAY_LAL,
        payload: 'lal',
    }
}