import React, { useEffect, useRef } from "react";
import Graph from "graphology";
import Sigma from "sigma";
import "./App.css";

function App() {
  // Create a ref to hold the container for the Sigma renderer
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize the graph
    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });

    // Initialize the Sigma renderer
    const renderer = new Sigma(graph, containerRef.current);

    // Cleanup function to destroy the Sigma instance when the component unmounts
    return () => {
      renderer.kill();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sigma.js Example</h1>
        <div
          id="sigma-container"
          ref={containerRef}
          style={{ width: "800px", height: "600px", border: "1px solid #ccc" }}
        ></div>
      </header>
    </div>
  );
}

export default App;
