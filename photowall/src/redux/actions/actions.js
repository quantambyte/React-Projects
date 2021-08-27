import { database } from '../../db/config';

// add post to database
export const startAddingPost = (post) => {
  return (dispatch) => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// get posts
export const startLoadingPost = () => {
  return (dispatch) => {
    return database
      .ref('posts')
      .once('value')
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((child) => {
          posts.push(child.val());
        });

        dispatch(loadPosts(posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadPosts = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts,
  };
};

// remove post
export const removePost = (index) => {
  return {
    type: 'REMOVE_POST',
    index,
  };
};

// add post
export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    post,
  };
};

// add comment
export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId,
  };
};
