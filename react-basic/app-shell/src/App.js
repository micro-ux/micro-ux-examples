import React, { useEffect } from "react";

import { loadModule } from "@micro-ux/shell";

const LazyWidget = React.lazy(() =>
  loadModule("parcel2/widget2").then((Module) => {
    return {
      default: Module,
    };
  })
);

function App() {
  const [showWidget, setShowWidget] = React.useState(false);

  const sayHelloOnClick = async () => {
    const HelloModule = await loadModule("parcel2/sayHelloFunction");
    HelloModule.sayHello("micro-ux federated module dyanmic @@@@");
    setShowWidget(true);
    // const MyWidget = await loadModule("parcel2/widget2");
    // setParcel2Widget(MyWidget);
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h1>Dynamic System Host</h1>
      <h2>App Shell</h2>
      <button onClick={sayHelloOnClick}>Say Hello</button>
      {showWidget && (
        <React.Suspense fallback={<div>error occurred</div>}>
          <LazyWidget />
        </React.Suspense>
      )}
      {/* <p>
        The Dynamic System will take advantage Module Federation{" "}
        <strong>remotes</strong> and <strong>exposes</strong>. It will no load
        components that have been loaded already.
      </p>
      <button onClick={setApp2}>Load App 2 Widget</button>
      <div style={{ marginTop: "2em" }}>{Component && <Component />}</div> */}
    </div>
  );
}

export default App;
