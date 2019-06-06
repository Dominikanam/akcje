import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes';

const initialState = [];

const updateComment = (state, action, update) =>
	state.map(comment => comment.id === action.id ? update(comment, action) : comment);

const edit = (comment, action) => ({ ...comment, text: action.text });
const voteUp = comment => ({ ...comment, votes: comment.votes + 1});
const voteDown = comment => ({ ...comment, votes: comment.votes - 1});

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
			return updateComment(state, action, voteUp);

		case THUMB_DOWN_COMMENT:
			return updateComment(state, action, voteDown);

		case EDIT_COMMENT:
			return updateComment(state, action, edit);

        default:
            return state;
    }
};

