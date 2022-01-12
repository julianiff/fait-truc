import { useState } from "react";
import React from "react";
import { Card } from "./components/atom/Card";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

function countReducer(state: any, action: any) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const ThemeContext = React.createContext(themes);
export const CountContext = React.createContext<{
  state: { count: any };
  dispatch: React.Dispatch<any>;
}>({ state: { count: 0 }, dispatch: () => "" });

function App() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CountContext.Provider value={value}>
      <Card></Card>
    </CountContext.Provider>
  );
}

export default App;
