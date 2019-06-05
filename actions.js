import uuid from uuid;
import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes';

const addComment = (text) => ({
	type: ADD_COMMENT,
    text,
    id: uuid.v4()
});

const removeComment = (id) => ({
	type: REMOVE_COMMENT,
	id
});

const editComment = (id, text) => ({
	type: EDIT_COMMENT,
	id,
	text
});

const thumbUpComment = (id) => ({
	type: THUMB_UP_COMMENT,
	id
});

const thumbDownComment = (id) => ({
	type: THUMB_DOWN_COMMENT,
	id
});
