import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports hover/touch
    if (typeof window === 'undefined' || (typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches)) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target && target.tagName) {
        try {
          const isClickable =
            target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.tagName === 'INPUT' ||
            (typeof target.closest === 'function' && (target.closest('button') !== null || target.closest('a') !== null)) ||
            (typeof target.getAttribute === 'function' && target.getAttribute('role') === 'button');
          setIsPointer(!!isClickable);
        } catch {
          // ignore
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#141413]/60 transition-all duration-150 ${
          isPointer
            ? 'w-8 h-8 bg-[#FDB813]/25 scale-125 border-[#141413]'
            : 'w-3.5 h-3.5 bg-[#141413]/40'
        }`}
      />
    </div>
  );
}
