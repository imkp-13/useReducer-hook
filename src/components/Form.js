import React, { useReducer, useRef } from "react";
import { formReducer, initialState } from "../reducers/formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "CHNAGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const addTag = () => {
    const tag = tagRef.current.value.split(",");
    tag.forEach((data) => {
      dispatch({ type: "ADD_TAG", payload: data });
    });
  };

  console.log(state);

  return (
    <div>
      <label>Name: </label>
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label>Description: </label>
      <input type="text" name="desc" onChange={handleChange} />
      <br />
      <label>Category: </label>
      <select name="category" onChange={handleChange}>
        <option value={`Jeans`}>Jeans</option>
        <option value={`Shirt`}>Shirt</option>
        <option value={`T-Shirt`}>T-Shirt</option>
        <option value={`Sneakers`}>Sneakers</option>
      </select>
      <br />
      <label>Tags: </label>
      <textarea ref={tagRef}></textarea>
      {state.tags.map((data, index) => {
        return (
          <small
            key={index}
            onClick={() => dispatch({ type: "REMOVE_TAG", payload: data })}
          >
            {data}
          </small>
        );
      })}
      <button onClick={addTag}>Add Tags</button>
      <br />
      <label>Quantity: </label>
      <button onClick={() => dispatch({ type: "ADD_QTY" })}>+</button>
      <span>0</span>
      <button onClick={() => dispatch({ type: "REMOVE_QTY" })}>-</button>
    </div>
  );
};

export default Form;
