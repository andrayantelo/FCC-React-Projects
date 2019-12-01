import simpsons from '../apis/simpsons';

export const RANDOM_QUOTE = 'RANDOM_QUOTE';

export const getRandomQuote = () => async (dispatch) => {
    const response = await simpsons.get();

    dispatch( {type: RANDOM_QUOTE, payload: response.data[0]})
}