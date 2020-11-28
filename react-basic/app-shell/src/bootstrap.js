import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

import { init } from "@micro-ux/shell";

console.log("registering modules");
(async () => {
  await init({
    parcelDescriptors: [
      {
        id: "parcel1",
        manifestVersion: "1.0.0",
        baseUrl: "http://localhost:3001",
        basePath: "",
        entry: "remoteEntry.js",
        buildType: "federatedModuleWebpack",
        version: "1.0.0",
        modules: [
          {
            id: "parcel1/widget1",
            manifestVersion: "1.0.0",
            type: "widgetModule",
            entry: "./src/Widget",
          },
        ],
      },
      {
        id: "parcel2",
        manifestVersion: "1.0.0",
        baseUrl: "http://localhost:3002",
        basePath: "",
        entry: "remoteEntry.js",
        buildType: "federatedModuleWebpack",
        version: "1.0.0",
        modules: [
          {
            id: "parcel2/widget2",
            manifestVersion: "1.0.0",
            type: "widgetModule",
            entry: "./src/Widget",
          },
          {
            id: "parcel2/sayHelloFunction",
            manifestVersion: "1.0.0",
            type: "functionModule",
            entry: "./src/HelloFunctionModule",
          },
        ],
      },
    ],
  });
})();

ReactDOM.render(<App />, document.getElementById("root"));
