export function RacetrackStrip() {
  return (
    <div 
      className="w-full h-[28px] border-y-[3px] border-black"
      style={{ 
        background: `repeating-conic-gradient(#000000 0% 25%, #FFFFFF 0% 50%) 0 0 / 28px 28px`,
      }}
      aria-hidden
    />
  );
}
