import { createStore } from 'redux';
import reducers from './reducers';
import { addComment } from './actions';

const store = createStore(reducers);

store.subscribe(() => {
    const comments = store.getState().comments;
    ReactDOM.render(<CommentsList comments={comments} />, mountingPoint)
});

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));