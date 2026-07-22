'use client';

import { useCallback, useEffect, useState } from 'react';
import { X, BadgeCheck } from 'lucide-react';

const STORAGE_KEY = 'sarwagyna-dpiit-popup-seen';

export default function DpiitRecognitionPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // ignore storage errors
    }

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dpiit-popup-title"
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      <div className="relative w-full max-w-[400px] rounded-2xl bg-white border border-border-subtle shadow-2xl overflow-hidden">
        {/* Indian flag stripe */}
        <div className="flex h-1.5 w-full" aria-hidden="true">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white border-y border-[#E8E8E8]" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-3 z-10 p-1.5 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="px-6 pt-7 pb-6 text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#000080] text-white flex items-center justify-center shadow-[0_0_0_3px_#FF9933,0_0_0_6px_#138808]">
            <BadgeCheck className="w-6 h-6" aria-hidden="true" />
          </div>

          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FF9933] mb-2">
            Startup India
          </p>

          <h2 id="dpiit-popup-title" className="text-[20px] font-display font-bold text-text tracking-tight mb-3">
            DPIIT Recognised
          </h2>

          <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
            Sarwagyna is recognised under the Startup India initiative by DPIIT, Government of India.
          </p>

          <div className="inline-flex flex-col items-center gap-1 rounded-xl bg-white border border-[#138808]/25 px-5 py-3 mb-6 shadow-[inset_0_0_0_1px_rgba(255,153,51,0.15)]">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#138808]">
              Recognition Number
            </span>
            <span className="text-[18px] font-mono font-bold text-[#000080] tracking-wide">
              DIPP270277
            </span>
          </div>

          <button
            type="button"
            onClick={close}
            className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#138808] text-white text-[14px] font-semibold hover:bg-[#0f6b06] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
