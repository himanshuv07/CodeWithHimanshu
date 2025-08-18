import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  animationDelay: number;
  color: string;
}

const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setPieces(newPieces);

    // Clean up after animation completes
    const timer = setTimeout(() => {
      setPieces([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute top-0"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;