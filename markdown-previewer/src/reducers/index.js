import { combineReducers } from 'redux';
import { SET_MARKDOWN } from '../actions';
/* A reducer is a pure function 
that takes the previous state and an action
and returns the next state
*/

// initial state
let placeholderMarkdown = `
# Welcome to my React Markdown Previewer!  
## Feel free to take a look around  
Take a look at my [portfolio page](https://andrayantelo.github.io) while you're here  
Have some code: \` const hello = () => 'hello stranger'\`  
Oh? You want more code? Here:
\`\`\`
    const feed = (viewer) => {  
        if (viewer === 'hungry') {  
            feed()  
        }  
        else {  
            return  
        }  
    } 
\`\`\`
Here is a list:
1. Do groceries  
2. feed dog  
3. Go to bank 

>Go do those things (this is a blockquote) 

![alt text](http://pngimages.net/sites/default/files/gingerbread-small-png-image-11976.png "Stock Photo")  
**Cookie!**

`.replace(/&gt;+/g, '>')
;

const setMarkdownReducer = (markdown=placeholderMarkdown, action) => {
    if (action.type === SET_MARKDOWN) {
        return action.payload;
    }
    return markdown;
}
/*  The combineReducer function is a helper
function that turns an object whose values
are different reducing functions into a single
reducing function that can be passed to
createStore.
The resulting reducer calls every child
reducer, and gathers their results into
a single state object. The state produced
by combineReducers namespaces the states
of each reducer under their keys passed to
combineReducer */
export default combineReducers({
    markdown: setMarkdownReducer
})