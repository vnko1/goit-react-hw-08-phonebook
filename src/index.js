import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { App } from "components/App";
import "./index.css";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// <React.StrictMode>
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistStor}>
//       <App />
//     </PersistGate>
//   </Provider>
// </React.StrictMode>;
