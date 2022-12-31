import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { initialState, postReducer } from "../reducers/postReducer";

const Posts = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "FETCH_FAILED" });
      console.error(error);
    }
  };

  return (
    <div>
      {state.posts.slice(0, 4).map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
