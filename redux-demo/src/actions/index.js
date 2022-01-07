import uuidv4 from  'uuid/v4'
export const createPost = content => ({
    type: 'ADD_POST',
    payload: {
     id: uuidv4(),
     content,   
    },
});