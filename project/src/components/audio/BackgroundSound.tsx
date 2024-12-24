import React, { useState, useEffect, useRef } from 'react';
import { Music4, VolumeX } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

declare global {
  interface Window {
    SC: {
      Widget: any;
    };
  }
}

const BackgroundSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [widget, setWidget] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { language } = useLanguage();

  const label = language === 'pl' 
    ? 'Muzyka medytacyjna' 
    : 'Meditation music';

  useEffect(() => {
    // Load SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    
    script.onload = () => {
      if (iframeRef.current) {
        const newWidget = window.SC.Widget(iframeRef.current);
        
        newWidget.bind(window.SC.Widget.Events.READY, () => {
          newWidget.setVolume(volume * 100);
          setWidget(newWidget);
        });

        newWidget.bind(window.SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
        });

        newWidget.bind(window.SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });

        newWidget.bind(window.SC.Widget.Events.FINISH, () => {
          newWidget.seekTo(0);
          newWidget.play();
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [volume]);

  const togglePlay = () => {
    if (!widget) return;
    
    if (isPlaying) {
      widget.pause();
    } else {
      widget.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (widget) {
      widget.setVolume(newVolume * 100);
    }
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/peter-emad-32/sets/music-medittion&color=%23846bb9&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
        style={{ display: 'none' }}
      />
      
      <div className="fixed bottom-6 left-24 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-3 flex items-center space-x-3 hover:bg-white/90 transition-all duration-300">
          <button
            onClick={togglePlay}
            className="group relative p-2 hover:bg-primary/10 rounded-full transition-colors"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <Music4 className="w-5 h-5 text-primary animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            )}
            
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-primary cursor-pointer"
            aria-label="Volume control"
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundSound;