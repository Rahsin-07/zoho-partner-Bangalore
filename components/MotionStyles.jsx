'use client'
// Shared scroll-reveal + slide animation classes for ZoFlowX.
// Rendered once (inside Hero). Works with the existing IntersectionObserver
// pattern: add `fade-up` (so `.visible` is toggled) plus a direction class.
export default function MotionStyles() {
  return (
    <style>{`
      .zx-sl, .zx-sr, .zx-su, .zx-sd, .zx-zoom {
        transition: opacity .75s cubic-bezier(.2,.7,.2,1), transform .75s cubic-bezier(.2,.7,.2,1);
        will-change: transform, opacity;
      }
      .zx-sl   { transform: translateX(-48px); }
      .zx-sr   { transform: translateX(48px); }
      .zx-su   { transform: translateY(42px); }
      .zx-sd   { transform: translateY(-42px); }
      .zx-zoom { transform: scale(.9); }
      .zx-sl.visible, .zx-sr.visible, .zx-su.visible,
      .zx-sd.visible, .zx-zoom.visible { transform: none; }

      @media (prefers-reduced-motion: reduce) {
        .zx-sl, .zx-sr, .zx-su, .zx-sd, .zx-zoom { transform: none; transition: none; }
      }

      /* Hero slider */
      .zx-hero-track { display: flex; transition: transform .8s cubic-bezier(.45,.05,.2,1); }
      .zx-hero-slide { flex: 0 0 100%; width: 100%; }
      @keyframes zx-dot-fill { from { width: 0; } to { width: 100%; } }
      .zx-dot-progress { animation: zx-dot-fill linear forwards; }
    `}</style>
  )
}
