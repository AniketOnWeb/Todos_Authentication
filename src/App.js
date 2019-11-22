import React from "react";
import { render } from "react-dom";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div>hiiis</div>
    </Layout>
  );
};

render(<App />, document.getElementById("root"));
