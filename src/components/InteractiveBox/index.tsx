import { useRef, useEffect, useState } from "react";
import p5 from "p5";

const InteractiveBox = () => {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const sketch = (p) => {
      let angleX = p.HALF_PI / 16; // Default starting angle
      let angleY = p.QUARTER_PI / 1;
      const cubeSize = 260; // Cube size

      p.setup = () => {
        p.createCanvas(500, 550, p.WEBGL).parent(canvasRef.current);
        p.noStroke();
        p.setAttributes("alpha", true);
      };

      p.draw = () => {
        p.clear();

        p.push();
        p.rotateX(angleX);
        p.rotateY(angleY);

        p.ambientLight(255);
        p.directionalLight(180, 180, 180, 1, 1, -1);

        const faces = [
          { x: 0, y: -cubeSize / 2, z: 0, rotateX: p.HALF_PI, rotateY: 0 },
          { x: 0, y: cubeSize / 2, z: 0, rotateX: p.HALF_PI, rotateY: 0 },
          { x: 0, y: 0, z: cubeSize / 2, rotateX: 0, rotateY: 0 },
          { x: 0, y: 0, z: -cubeSize / 2, rotateX: 0, rotateY: 0 },
          { x: -cubeSize / 2, y: 0, z: 0, rotateX: 0, rotateY: p.HALF_PI },
          { x: cubeSize / 2, y: 0, z: 0, rotateX: 0, rotateY: p.HALF_PI },
        ];

        faces.forEach(({ x, y, z, rotateX, rotateY }) => {
          p.push();
          p.fill("#89898961");
          p.translate(x, y, z);
          p.rotateX(rotateX);
          p.rotateY(rotateY);
          p.plane(cubeSize);
          p.pop();
        });

        p.pop();
      };

      p.mouseMoved = () => {
        if (hovered) {
          angleX = p.map(p.mouseY, 0, p.height, -p.QUARTER_PI, p.QUARTER_PI);
          angleY = p.map(p.mouseX, 0, p.width, -p.QUARTER_PI, p.QUARTER_PI);
        }
      };
    };

    const myP5 = new p5(sketch);
    return () => myP5.remove();
  }, [hovered]);

  return (
    <div
      ref={canvasRef}
      className="w-full flex justify-center items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
    />
  );
};

export default InteractiveBox;
