import React, { useLayoutEffect, useState } from "react";
import { fabric } from "fabric";

const App = () => {
  var canvas;
  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("circle");
  const [isIdle, setIdle] = useState(true);
  const [strokeColor, setStrokeColor] = useState("#000");
  const [selectedElement, setSelectedElement] = useState(null);

  // Define the URL where your background image is located
  const [imageUrl, setImageUrl] = useState(
    "https://www.cavalierart.com.au/wp-content/uploads/2009/05/p_paper_graph2.jpg"
  );

  useLayoutEffect(() => {
    canvas = new fabric.Canvas("canvas", { selection: false });

    /* // Define
    canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas), {
      // Optionally add an opacity lvl to the image
      backgroundImageOpacity: 0.5,
      // should the image be resized to fit the container?
      backgroundImageStretch: false,
      width: canvas.getWidth(),
      height: canvas.getHeight(),
      originX: "left",
      originY: "top"
    });
    canvas.renderAll(); */
    var circle, rect, isDown, origX, origY, triangle, line;

    canvas.on("mouse:down", function(o) {
      isDown = true;
      var pointer = canvas.getPointer(o.e);
      origX = pointer.x;
      origY = pointer.y;

      var points = [pointer.x, pointer.y, pointer.x, pointer.y];
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        fill: false,
        stroke: strokeColor
      });
      canvas.add(rect);
      circle = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 0,
        strokeWidth: 1,
        stroke: strokeColor,
        selectable: false,
        originX: "center",
        originY: "center",
        fill: false
      });
      canvas.add(circle);

      triangle = new fabric.Triangle({
        left: pointer.x,
        top: pointer.y,
        strokeWidth: 1,
        width: 0,
        height: 0,
        stroke: "black",
        fill: "white",
        selectable: true,
        originX: "center"
      });
      canvas.add(triangle);

      line = new fabric.Line(points, {
        left: 100,
        top: 100,
        stroke: strokeColor,
        strokeWidth: 1
      });
      canvas.add(line);
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

      if (tool === "line") {
        line.set({ x2: pointer.x, y2: pointer.y });
        canvas.renderAll();
      }
      if (tool === "triangle") {
        triangle.set({ width: Math.abs(origX - pointer.x), height: Math.abs(origY - pointer.y) });
      }
      if (tool === "selection") {
        canvas.isDrawingMode = true;
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
          onChange={() => {
            setTool("rectangle");
          }}
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
      <div
        style={{
          position: "absolute",
          top: "30px",
          backgroundImage: "url(" + imageUrl + ")"
        }}
      >
        <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}>
          Canvas
        </canvas>
      </div>
    </div>
  );
};

export default App;
