import { useState, useEffect, RefObject } from 'react';
import { useSpring, useMotionValue, useTransform } from 'framer-motion';
interface TiltOptions {
  maxTilt?: number; // Maximum tilt in degrees (default 15)
  stiffness?: number; // Spring stiffness (default 150)
  damping?: number; // Spring damping (default 15)
}
export function useMouseTilt(ref: RefObject<HTMLElement>, options: TiltOptions = {}) {
  const {
    maxTilt = 15,
    stiffness = 150,
    damping = 15
  } = options;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness,
    damping
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness,
    damping
  });
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Calculate mouse position relative to the element center (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
  return {
    rotateX,
    rotateY
  };
}