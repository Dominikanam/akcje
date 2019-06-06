import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	switch(action.type) {
        case ADD_COMMENT:
            return [
				...state,
				{
					id: action.id,
					text: action.text,
					votes: 0
				}
			];

		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id);

		case THUMB_UP_COMMENT:
			return state.map(comment => (comment.id === action.id) ? { ...comment, votes: comment.votes + 1} : comment );

		case THUMB_DOWN_COMMENT:
			return state.map(comment => (comment.id === action.id) ? { ...comment, votes: comment.votes - 1} : comment );

		case EDIT_COMMENT:
			return state.map(comment => (comment.id === action.id) ? { ...comment, text: comment.text } : comment );
		default:
            return state;
    }
};

