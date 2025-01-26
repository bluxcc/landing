import React, { useRef, useEffect } from "react";
import p5 from "p5";

const AnimatedBlux: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let img1: p5.Image, img2: p5.Image, img3: p5.Image, img4: p5.Image;
      let currentPositions: number[] = [];
      let targetPositions: number[] = [];
      let lastUpdateTime = 0;
      let animationProgress = 1;
      let squareSize: number;
      let gap: number;

      // Preload images
      p.preload = () => {
        img1 = p.loadImage("/B.png");
        img2 = p.loadImage("/L.png");
        img3 = p.loadImage("/U.png");
        img4 = p.loadImage("/X.png");
      };

      // Calculate dimensions based on container size
      const calculateDimensions = () => {
        const container = sketchRef.current!;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        gap = containerWidth * 0.015;
        squareSize = (containerWidth - gap * 3) / 4;

        // Resize canvas to match container size
        p.resizeCanvas(containerWidth, containerHeight);
      };

      // Setup function
      p.setup = () => {
        const container = sketchRef.current!;
        p.createCanvas(container.offsetWidth, container.offsetHeight).parent(
          container
        );
        calculateDimensions();
        currentPositions = Array.from({ length: 4 }, () =>
          Math.floor(p.random(4))
        );
        targetPositions = [...currentPositions];
      };

      // Handle window resize
      p.windowResized = () => {
        calculateDimensions();
      };

      // Draw function for animation
      p.draw = () => {
        p.clear();
        const currentTime = p.millis();

        if (currentTime - lastUpdateTime >= 3000 && animationProgress >= 1) {
          generateNewPositions();
          lastUpdateTime = currentTime;
          animationProgress = 0;
        }

        if (animationProgress < 1) {
          animationProgress += 0.05;
        }

        drawGrid();
      };

      // Draw the grid with images
      const drawGrid = () => {
        const currentY = currentPositions.map((pos, i) => {
          const targetY = targetPositions[i];
          return p.lerp(pos, targetY, easeInOutCubic(animationProgress));
        });

        for (let col = 0; col < 4; col++) {
          const x = col * (squareSize + gap);
          const y = currentY[col] * (squareSize + gap);

          p.fill(255);
          p.noStroke();
          p.rect(x, y, squareSize, squareSize);

          const img = [img1, img2, img3, img4][col];
          p.image(img, x, y, squareSize, squareSize);
        }
      };

      // Generate new positions for animation
      const generateNewPositions = () => {
        currentPositions = [...targetPositions];
        targetPositions = Array.from({ length: 4 }, () =>
          Math.floor(p.random(4))
        );
      };

      // Easing function
      const easeInOutCubic = (x: number): number => {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current!);

    // Cleanup p5 instance on unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        width: "470px",
        height: "470px",
        overflow: "hidden",
        position: "relative",
      }}
    />
  );
};

export default AnimatedBlux;
