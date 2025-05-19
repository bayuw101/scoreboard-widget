import React, { useRef, useEffect, useState } from 'react';

interface CanvasImageProps {
  imageUrl: string;
  fallbackImageUrl?: string;
  threshold?: number;
  tolerance?: number;
className?: string;
}

const CanvasImage: React.FC<CanvasImageProps> = ({
  imageUrl,
  fallbackImageUrl = 'https://assets-api.rschooltoday.com/widget/team.png',
  threshold = 240,
  tolerance = 10,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const processImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const toleranceValue = (tolerance / 100) * 255;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const isWhite = 
        r > threshold - toleranceValue && 
        g > threshold - toleranceValue && 
        b > threshold - toleranceValue;

      if (isWhite) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    setProcessedImage(canvas.toDataURL('image/png'));
  };

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    
    img.onload = () => {
      setError(false);
      processImage(img);
    };

    img.onerror = () => {
      setError(true);
      // Load fallback image
      const fallbackImg = new Image();
      fallbackImg.onload = () => processImage(fallbackImg);
      fallbackImg.src = fallbackImageUrl;
    };

    img.src = imageUrl;
  }, [imageUrl, fallbackImageUrl, threshold, tolerance]);

  return (
    <div className={`image-container ${className}`}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {processedImage ? (
        <img 
          src={processedImage} 
          alt={error ? "Fallback content" : "Background removed"} 
          style={{ background: 'transparent' }}
        />
      ) : (
        <div className={`image-loader rounded-full ${className} bg-gray-300 animate-pulse`}>
            
        </div>
      )}
    </div>
  );
};

export default CanvasImage;