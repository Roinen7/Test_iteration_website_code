import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NodeBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize nodes
    const initializeNodes = () => {
      const nodeCount = 20;
      nodesRef.current = [];
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };
    initializeNodes();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const repelDistance = 120;
      const repelStrength = 0.3;

      // Update nodes
      nodes.forEach((node, i) => {
        // Mouse repulsion
        const dx = node.x - mousePos.x;
        const dy = node.y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - dist / repelDistance) * repelStrength;
          node.vx += Math.cos(angle) * force;
          node.vy += Math.sin(angle) * force;
        }

        // Add some damping
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges with bounce
        if (node.x < 0) {
          node.x = canvas.width;
          node.vx *= -0.5;
        }
        if (node.x > canvas.width) {
          node.x = 0;
          node.vx *= -0.5;
        }
        if (node.y < 0) {
          node.y = canvas.height;
          node.vy *= -0.5;
        }
        if (node.y > canvas.height) {
          node.y = 0;
          node.vy *= -0.5;
        }

        // Draw node with glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.8)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(
          node.x - node.radius * 3,
          node.y - node.radius * 3,
          node.radius * 6,
          node.radius * 6
        );

        // Draw core
        ctx.fillStyle = 'rgba(34, 211, 238, 1)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby nodes
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.2)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.3;
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-60"
    />
  );
}
