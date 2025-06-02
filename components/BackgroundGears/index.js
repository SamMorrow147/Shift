import React, { useEffect, useRef } from 'react';
import styles from './BackgroundGears.module.css';

const BackgroundGears = ({ opacity = 0.15 }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const gearsRef = useRef([]);

  useEffect(() => {
    console.log('BackgroundGears component mounted, opacity:', opacity);
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas ref not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    console.log('Canvas context:', ctx);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
      initGears();
    };

    const initGears = () => {
      const gears = [];
      const numGears = Math.min(5, Math.floor((canvas.width * canvas.height) / 120000));
      console.log('Creating', numGears, 'gears');
      
      // Define light gray colors that are lighter than the background
      const gearColors = [
        '#E8E8E8',  // Very light gray
        '#F0F0F0',  // Almost white gray
        '#ECECEC',  // Light gray
        '#F4F4F4',  // Pale gray
        '#E5E5E5',  // Soft gray
        '#EEEEEE',  // Light neutral gray
      ];
      
      for (let i = 0; i < numGears; i++) {
        const radius = 60 + Math.random() * 80;
        const teeth = Math.floor(radius / 8) + 8; // Fewer, larger teeth
        let x, y;
        let attempts = 0;
        
        // Try to place gears without overlapping
        do {
          x = radius + Math.random() * (canvas.width - radius * 2);
          y = radius + Math.random() * (canvas.height - radius * 2);
          attempts++;
        } while (attempts < 30 && gears.some(gear => {
          const distance = Math.sqrt((gear.x - x) ** 2 + (gear.y - y) ** 2);
          return distance < gear.radius + radius + 80;
        }));
        
        if (attempts < 30) {
          gears.push({
            x,
            y,
            radius,
            teeth,
            rotationSpeed: (0.003 + Math.random() * 0.007) * (Math.random() > 0.5 ? 1 : -1),
            rotation: Math.random() * Math.PI * 2,
            color: gearColors[i % gearColors.length]
          });
          console.log('Created gear', i, 'at', x, y, 'with radius', radius);
        }
      }
      
      gearsRef.current = gears;
      console.log('Total gears created:', gears.length);
    };

    const drawGear = (gear) => {
      const { x, y, radius, teeth, rotation, color } = gear;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Create subtle gray gradient
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, '#FFFFFF'); // White center
      gradient.addColorStop(0.7, color);
      gradient.addColorStop(1, '#D0D0D0'); // Slightly darker edge
      
      // Draw the complete gear shape including teeth
      const toothAngle = (Math.PI * 2) / teeth;
      const innerRadius = radius * 0.75; // Increased from 0.7 to make teeth shorter
      const outerRadius = radius;
      const toothHeight = radius * 0.2;
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      
      // Draw gear outline with proper teeth
      for (let i = 0; i < teeth; i++) {
        const baseAngle = i * toothAngle;
        const toothWidth = toothAngle * 0.4; // Back to thick teeth (was 0.25, now 0.4)
        
        // Angles for the tooth
        const angle1 = baseAngle - toothWidth / 2;  // Left side of tooth
        const angle2 = baseAngle + toothWidth / 2;  // Right side of tooth
        const angle3 = baseAngle - toothAngle / 2;  // Left valley
        const angle4 = baseAngle + toothAngle / 2;  // Right valley
        
        if (i === 0) {
          // Start from the first point
          ctx.moveTo(Math.cos(angle3) * innerRadius, Math.sin(angle3) * innerRadius);
        }
        
        // Draw valley to tooth base
        ctx.lineTo(Math.cos(angle3) * innerRadius, Math.sin(angle3) * innerRadius);
        
        // Draw up the left side of the tooth
        ctx.lineTo(Math.cos(angle1) * innerRadius, Math.sin(angle1) * innerRadius);
        ctx.lineTo(Math.cos(angle1) * outerRadius, Math.sin(angle1) * outerRadius);
        
        // Draw across the top of the tooth
        ctx.lineTo(Math.cos(angle2) * outerRadius, Math.sin(angle2) * outerRadius);
        
        // Draw down the right side of the tooth
        ctx.lineTo(Math.cos(angle2) * innerRadius, Math.sin(angle2) * innerRadius);
        
        // Draw to next valley
        ctx.lineTo(Math.cos(angle4) * innerRadius, Math.sin(angle4) * innerRadius);
      }
      
      ctx.closePath();
      ctx.fill();
      
      // Add subtle outline
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw center hub
      const hubRadius = radius * 0.25;
      const hubGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, hubRadius);
      hubGradient.addColorStop(0, '#FFFFFF');
      hubGradient.addColorStop(0.5, color);
      hubGradient.addColorStop(1, '#CCCCCC');
      
      ctx.fillStyle = hubGradient;
      ctx.beginPath();
      ctx.arc(0, 0, hubRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Add bolt holes for realism
      if (radius > 70) {
        const boltRadius = radius * 0.04;
        const boltDistance = radius * 0.5;
        const numBolts = 6;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        for (let i = 0; i < numBolts; i++) {
          const angle = (i / numBolts) * Math.PI * 2;
          const boltX = Math.cos(angle) * boltDistance;
          const boltY = Math.sin(angle) * boltDistance;
          
          ctx.beginPath();
          ctx.arc(boltX, boltY, boltRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Center highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(-hubRadius * 0.2, -hubRadius * 0.2, hubRadius * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set opacity for background effect
      ctx.globalAlpha = opacity;
      
      // Draw all gears
      gearsRef.current.forEach(gear => {
        gear.rotation += gear.rotationSpeed;
        drawGear(gear);
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.backgroundGears}
      style={{ opacity }}
    />
  );
};

export default BackgroundGears; 