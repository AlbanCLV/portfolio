// Custom hook for animation
import { useEffect } from 'react';
export default function useAnimation(callback, deps) {
  useEffect(callback, deps);
}
