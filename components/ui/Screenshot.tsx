'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScreenshotLightboxProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ScreenshotLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  title,
}: ScreenshotLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  // Reset to whichever thumbnail was clicked each time the lightbox opens
  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  // Keyboard nav + Escape + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />

          {/* Header */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between p-4 sm:p-6 z-10">
            <div className="flex items-center gap-3">
              {title && (
                <p className="text-sm font-semibold text-foreground truncate">{title}</p>
              )}
              {images.length > 1 && (
                <span className="text-xs text-muted-foreground font-medium tabular-nums">
                  {index + 1} / {images.length}
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close gallery"
              className="p-2 rounded-full text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10 border border-border/50 hover:border-cyan-400/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous screenshot"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full text-foreground/70 hover:text-cyan-400 bg-background/60 hover:bg-cyan-400/10 border border-border/50 hover:border-cyan-400/30 backdrop-blur transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next screenshot"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full text-foreground/70 hover:text-cyan-400 bg-background/60 hover:bg-cyan-400/10 border border-border/50 hover:border-cyan-400/30 backdrop-blur transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={title ? `${title} screenshot ${index + 1}` : `Screenshot ${index + 1}`}
              fill
              className="object-contain bg-black"
              sizes="90vw"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}