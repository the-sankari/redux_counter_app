import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./component/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
