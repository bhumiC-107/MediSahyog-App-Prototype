import React, { useState, useEffect } from 'react';
import { X, Globe, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const MultilingualBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner if not dismissed before
    const dismissed = localStorage.getItem('multilingual-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('multilingual-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 lg:bottom-4 lg:left-auto lg:right-4 lg:w-96 z-50 animate-in slide-in-from-bottom duration-500">
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-0 overflow-hidden">
        <div className="relative p-4">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="flex gap-3 pr-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Languages className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                8 Indian Languages Supported!
              </h3>
              <p className="text-sm text-white/90 mb-3">
                MediSahyog now supports English, Hindi, Punjabi, Tamil, Telugu, Bengali, Marathi & Gujarati
              </p>
              <p className="text-xs text-white/80">
                💡 Tap the language selector in the header to switch
              </p>
            </div>
          </div>

          {/* Dismiss button */}
          <Button
            onClick={handleDismiss}
            variant="secondary"
            size="sm"
            className="w-full mt-3 bg-white/20 hover:bg-white/30 text-white border-0"
          >
            Got it!
          </Button>
        </div>
      </Card>
    </div>
  );
};