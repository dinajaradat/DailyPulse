// func -1- add a comment to the comment table using the comment route arguments : dictionary
// func -2- delete a comment from the comment table using the comment route arguments : comment id
// func -3- get all comments for the user on all posts argument : user id
// func -4- update the comment in the comment table using the comment route arguments : comment id ,dictionary(contain the description)
// func -5- get all comments for certain new : news id

import useSWR from "swr";

export const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { useAuth } from "../context/auth";

export default function useComment(new_id) {
  const { tokens, logout, user } = useAuth();

  // console.log(user.id);
  const url = apiUrl + "api/v1/dailypulse/get_comments/";

  // const { data, error, isLoading, mutate } = useSWR(
  //   [`${url}${user.id}${new_id}`, tokens],
  //   fetchCommentUser
  // );

  // to get all comments for the user on all posts argument : user id
  async function fetchCommentUser(new_id) {
    const url = apiUrl + `api/v1/dailypulse/get_comments/${user.id}/${new_id}`;
    if (!tokens) {
      return;
    }
    try {
      const response = await fetch(url, config());

      const responseJSON = await response.json();

      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }

  // const { data, error, isLoading, mutate } = useSWR(
  //   [`${url}${user.id}`, tokens],
  //   fetchCommentUser
  // );

  // // to get all comments for the user on all posts argument : user id
  // async function fetchCommentUser() {
  //   const url = apiUrl + "api/v1/dailypulse/get_comments/" + user.id ;
  //   if (!tokens) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch(url, config());

  //     const responseJSON = await response.json();

  //     return responseJSON;
  //   } catch (err) {
  //     handleError(err);
  //   }
  // }

  // to get all comments for new : news id
  async function fetchCommentNew(title) {
    const encodedTitle = encodeURI(title);
    // console.log(encodedTitle);
    const url = apiUrl + `api/v1/dailypulse/get_comments_news/${encodedTitle}/`;
    if (!tokens) {
      return;
    }

    try {
      // console.log(url)
      const response = await fetch(url, config());

      const responseJSON = await response.json();
      console.log(responseJSON);

      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }

  // to add a comment to the comment table using the comment route arguments : dictionary
  async function createComment(info) {
    const url = apiUrl + "api/v1/dailypulse/create_comment/";

    try {
      const options = config();
      (options.method = "POST"), (options.body = JSON.stringify(info));
      const response = await fetch(url, options);
      const responseJSON = await response.json();
      // mutate(); // mutate causes complete collection to be refetched
      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }

  // to delete a comment from the comment table using the comment route arguments : comment id
  async function deleteComment(id) {
    try {
      const url = apiUrl + "api/v1/dailypulse/delete_comment/" + id;
      const options = config();
      options.method = "DELETE";
      const response = await fetch(url, options);
      // mutate(); // mutate causes complete collection to be refetched
      const res = await response.json();
      return res;
    } catch (err) {
      handleError(err);
    }
  }

  // to update the comment in the comment table using the comment route arguments : comment id,dictionary(contain the description)
  async function updateComment(id, info) {
    try {
      const url = apiUrl + "api/v1/dailypulse/update_comment/" + id;
      const options = config();
      options.method = "PUT";
      options.body = JSON.stringify(info);
      const response = await fetch(url, options);
      // mutate(); // mutate causes complete collection to be refetched
      const res = await response.json();
      return res;
    } catch (err) {
      handleError(err);
    }
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    return {
      headers: {
        Authorization: "Bearer " + tokens.access,
        "Content-Type": "application/json",
      },
    };
  }

  function handleError(err) {
    console.error(err);
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    logout();
  }

  return {
    // usercomment: data,
    // error,
    // loading: isLoading,
    createComment,
    deleteComment,
    updateComment,
    fetchCommentNew,
    fetchCommentUser,
  };
}
