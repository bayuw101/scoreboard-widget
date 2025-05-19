import React, { useRef, useEffect, useState } from 'react';


interface CanvasWhiteImageProps {
  imageUrl: string;
  fallbackImageUrl?: string;
  bgThreshold?: number; // Threshold for background removal (0-255)
  bgTolerance?: number; // Tolerance for background removal (0-100)
  className?: string;
}

const CanvasWhiteImage: React.FC<CanvasWhiteImageProps> = ({
  imageUrl,
  fallbackImageUrl = 'https://assets-api.rschooltoday.com/widget/team.png',
  bgThreshold = 240,
  bgTolerance = 10,
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

    // Set canvas dimensions
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw original image
    ctx.drawImage(img, 0, 0);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const toleranceValue = (bgTolerance / 100) * 255;

    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Check if pixel is background (white or near-white)
      const isBackground = 
        r > bgThreshold - toleranceValue && 
        g > bgThreshold - toleranceValue && 
        b > bgThreshold - toleranceValue;

      if (isBackground) {
        // Remove background (make transparent)
        data[i + 3] = 0;
      } else {
        // Recolor non-background pixels to white
        data[i] = 255;     // R
        data[i + 1] = 255; // G
        data[i + 2] = 255; // B
        // Alpha channel remains unchanged
      }
    }

    // Apply modified pixel data
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
      const fallbackImg = new Image();
      fallbackImg.onload = () => processImage(fallbackImg);
      fallbackImg.src = fallbackImageUrl;
    };

    img.src = imageUrl;
  }, [imageUrl, fallbackImageUrl, bgThreshold, bgTolerance]);

  return (
    <div className={`image-container ${className}`}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {processedImage ? (
        <img 
          src={processedImage} 
          alt={error ? "Fallback content" : "White image with transparent background"} 
          style={{ background: 'transparent' }}
        />
      ) : (
        <div className={`image-loader rounded-full ${className} bg-gray-300 animate-pulse`}></div>
      )}
    </div>
  );
};

export default CanvasWhiteImage;
