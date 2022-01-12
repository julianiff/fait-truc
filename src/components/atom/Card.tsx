import { useContext } from "react";
import { CountContext, ThemeContext } from "../../App";

export const Card = () => {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div onClick={() => dispatch({ type: "increment" })}>{state.count}</div>
  );
};
