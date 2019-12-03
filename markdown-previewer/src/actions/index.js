export const SET_MARKDOWN = 'SET_MARKDOWN';

export const setMarkdown = (markdown) => {
    return {
        type: SET_MARKDOWN,
        payload: markdown
    }
}