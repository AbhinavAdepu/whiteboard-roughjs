import React, { useLayoutEffect, useState } from "react";
import { fabric } from "fabric";

const App = () => {
  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("rectangle");
  const [isIdle, setIdle] = useState(true);
  const [selectedElement, setSelectedElement] = useState(null);

  useLayoutEffect(() => {
    var canvas = new fabric.Canvas("canvas", { selection: false });

    var circle, rect, isDown, origX, origY;

    canvas.on("mouse:down", function(o) {
      isDown = true;
      var pointer = canvas.getPointer(o.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        fill: false,
        stroke: "red"
      });
      canvas.add(rect);
      circle = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 1,
        strokeWidth: 1,
        stroke: "red",
        selectable: false,
        originX: "center",
        originY: "center",
        fill: false
      });
      canvas.add(circle);
    });

    canvas.on("mouse:move", function(o) {
      if (!isDown) return;
      var pointer = canvas.getPointer(o.e);
      if (tool === "circle") {
        circle.set({ radius: Math.abs(origX - pointer.x) });
      }
      if (tool === "rectangle") {
        rect.set({ left: origX, top: origY, width: pointer.x - origX, height: pointer.y - origY });
      }

      canvas.renderAll();
    });

    canvas.on("mouse:up", function(o) {
      isDown = false;
    });
  }, [elements]);

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <input
          type="radio"
          id="selection"
          checked={tool === "selection"}
          onChange={() => setTool("selection")}
        />
        <label htmlFor="selection">Selection</label>
        <input type="radio" id="line" checked={tool === "line"} onChange={() => setTool("line")} />
        <label htmlFor="line">Line</label>
        <input
          type="radio"
          id="rectangle"
          checked={tool === "rectangle"}
          onChange={() => setTool("rectangle")}
        />
        <label htmlFor="rectangle">Rectangle</label>
        <input
          type="radio"
          id="circle"
          checked={tool === "circle"}
          onChange={() => setTool("circle")}
        />
        <label htmlFor="circle">Circle</label>
        <input type="radio" id="arc" checked={tool === "arc"} onChange={() => setTool("arc")} />
        <label htmlFor="arc">arc</label>
        <button
          onClick={() => {
            console.log(document.getElementById("canvas").toDataURL());
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            console.log(document.getElementById("canvas").width);
            document.getElementById("canvas").width = document.getElementById("canvas").width;
          }}
        >
          Clear
        </button>
      </div>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>
        Canvas
      </canvas>
    </div>
  );
};

export default App;
