'use client';

import { useEffect } from 'react';

export function ScrollToHash() {
  useEffect(() => {
    const pending = sessionStorage.getItem('pendingSection');
    const target = pending || (window.location.hash ? window.location.hash.slice(1) : '');

    if (!target) return;

    let attempts = 0;
    const maxAttempts = 20;

    const tryScroll = () => {
      const el = document.getElementById(target);
      attempts++;

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${target}`);
        sessionStorage.removeItem('pendingSection');

        // One corrective pass in case layout shifts slightly right after
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
        return;
      }

      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 150);
      } else {
        sessionStorage.removeItem('pendingSection');
      }
    };

    const initialTimer = setTimeout(tryScroll, 100);
    return () => clearTimeout(initialTimer);
  }, []);

  return null;
}