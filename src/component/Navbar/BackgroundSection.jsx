import React, { useState, useEffect, useCallback, useMemo } from "react";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isRepelling = true;
  const [points, setPoints] = useState([]);

  // Memoize initial points creation
  const createInitialPoints = useCallback(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      size: Math.random() * 0.3 + 0.7,
    }));
  }, []);

  useEffect(() => {
    setPoints(createInitialPoints());
  }, [createInitialPoints]);

  // Memoize connection calculations
  const connections = useMemo(() => {
    const result = [];
    points.forEach((point, i) => {
      points.slice(i + 1).forEach((otherPoint) => {
        const distance = Math.hypot(
          point.x - otherPoint.x,
          point.y - otherPoint.y
        );
        if (distance < 30) {
          result.push({
            id: `${point.id}-${otherPoint.id}`,
            x1: point.x,
            y1: point.y,
            x2: otherPoint.x,
            y2: otherPoint.y,
            opacity: (1 - distance / 30) * 0.2,
          });
        }
      });
    });
    return result;
  }, [points]);

  // Throttle mouse movement updates
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => {
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    });
  }, []);

  // Optimize animation loop
  useEffect(() => {
    let animationFrameId;

    const updatePoints = () => {
      setPoints((currentPoints) =>
        currentPoints.map((point) => {
          const dx = mousePos.x - point.x;
          const dy = mousePos.y - point.y;
          const distance = Math.hypot(dx, dy);

          let forceX = 0;
          let forceY = 0;

          if (distance < 30) {
            const force = Math.pow((30 - distance) / 30, 2) * 0.8;
            if (isRepelling) {
              forceX = -dx * force * 0.06;
              forceY = -dy * force * 0.06;
            } else {
              forceX = dx * force * 0.03;
              forceY = dy * force * 0.03;
            }
          }

          const returnForce = 0.008;
          forceX += (point.baseX - point.x) * returnForce;
          forceY += (point.baseY - point.y) * returnForce;

          // Reduced random movement
          if (Math.random() < 0.1) {
            // Only apply random movement 10% of the time
            forceX += (Math.random() - 0.5) * 0.01;
            forceY += (Math.random() - 0.5) * 0.01;
          }

          let newVx = (point.vx + forceX) * 0.95;
          let newVy = (point.vy + forceY) * 0.95;

          const maxSpeed = 0.5;
          const currentSpeed = Math.hypot(newVx, newVy);
          if (currentSpeed > maxSpeed) {
            newVx = (newVx / currentSpeed) * maxSpeed;
            newVy = (newVy / currentSpeed) * maxSpeed;
          }

          let newX = point.x + newVx;
          let newY = point.y + newVy;

          if (newX < -10) newX = 110;
          if (newX > 110) newX = -10;
          if (newY < -10) newY = 110;
          if (newY > 110) newY = -10;

          return {
            ...point,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
      animationFrameId = requestAnimationFrame(updatePoints);
    };

    animationFrameId = requestAnimationFrame(updatePoints);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isRepelling]);

  const ParticlePoints = React.memo(({ points }) => (
    <>
      {points.map((point) => (
        <g key={point.id} filter="url(#glow)">
          <circle
            cx={point.x}
            cy={point.y}
            r={point.size * 0.3}
            fill="white"
            opacity="0.7"
          />
        </g>
      ))}
    </>
  ));

  const ConnectionLines = React.memo(({ connections }) => (
    <>
      {connections.map((connection) => (
        <line
          key={connection.id}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke="white"
          strokeWidth="0.15"
          opacity={connection.opacity}
        />
      ))}
    </>
  ));

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-purple-900 to-blue-500">
      <div className="w-full h-full" onMouseMove={handleMouseMove}>
        <svg
          className="w-full h-full absolute inset-0"
          viewBox="-10 -10 120 120"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ConnectionLines connections={connections} />
          <ParticlePoints points={points} />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(Background);
