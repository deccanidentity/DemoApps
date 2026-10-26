import { useRef, useState, useEffect, useCallback } from 'react';
import { CATEGORIES } from '../../data/apps.js';

export default function CategoryPills({ selectedCategory, onSelectCategory }) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Drag tracking refs to avoid stale closures
  const dragInfo = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    hasMoved: false,
  });

  // Update scroll boundaries
  const updateScrollBounds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollBounds();
    window.addEventListener('resize', updateScrollBounds);
    return () => window.removeEventListener('resize', updateScrollBounds);
  }, [updateScrollBounds]);

  // Translate mouse wheel over horizontal category bar into immediate horizontal scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If user is rolling mouse wheel or two-finger scrolling
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX) && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        updateScrollBounds();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [updateScrollBounds]);

  // Auto-scroll active pill into view safely (contained to scroller, no window jump)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const activeChip = el.querySelector('.category-chip.active');
    if (activeChip) {
      const chipLeft = activeChip.offsetLeft;
      const chipWidth = activeChip.offsetWidth;
      const scrollerWidth = el.clientWidth;
      const targetLeft = chipLeft - (scrollerWidth / 2) + (chipWidth / 2);
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
    updateScrollBounds();
  }, [selectedCategory, updateScrollBounds]);

  const scrollByAmount = (amount) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(updateScrollBounds, 320);
    }
  };

  // Pointer event handlers (works for desktop mouse, touch, and stylus)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const el = scrollerRef.current;
    if (!el) return;

    dragInfo.current = {
      isDown: true,
      startX: e.clientX,
      startScrollLeft: el.scrollLeft,
      hasMoved: false,
    };
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (!dragInfo.current.isDown || !scrollerRef.current) return;
    const dx = e.clientX - dragInfo.current.startX;
    if (Math.abs(dx) > 4) {
      dragInfo.current.hasMoved = true;
    }
    scrollerRef.current.scrollLeft = dragInfo.current.startScrollLeft - dx;
    updateScrollBounds();
  };

  const handlePointerUp = (e) => {
    if (!dragInfo.current.isDown) return;
    dragInfo.current.isDown = false;
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}

    updateScrollBounds();
  };

  return (
    <div className={`category-scroller-wrapper ${canScrollLeft ? 'has-left-fade' : ''} ${canScrollRight ? 'has-right-fade' : ''}`}>
      {/* Left Scroll Arrow Button */}
      {canScrollLeft && (
        <button
          type="button"
          className="category-nav-arrow category-nav-arrow--left"
          onClick={() => scrollByAmount(-280)}
          aria-label="Scroll categories left"
          title="Scroll left"
        >
          ‹
        </button>
      )}

      {/* Horizontal Scroller Container */}
      <div
        ref={scrollerRef}
        className={`category-scroller ${isDragging ? 'is-dragging' : ''}`}
        role="tablist"
        aria-label="App categories filter"
        onScroll={updateScrollBounds}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`category-chip ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                // If user dragged horizontally, do not trigger category click
                if (dragInfo.current.hasMoved) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                onSelectCategory(cat.id);
              }}
            >
              <span className="category-chip__emoji" aria-hidden="true">{cat.emoji || '📱'}</span>
              <span>{cat.name}</span>
              {cat.count > 0 && (
                <span className="category-chip__count">
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Right Scroll Arrow Button */}
      {canScrollRight && (
        <button
          type="button"
          className="category-nav-arrow category-nav-arrow--right"
          onClick={() => scrollByAmount(280)}
          aria-label="Scroll categories right"
          title="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  );
}
