import React, { useState, useRef, useEffect } from "react";

/**
 * Simple accessible dropdown that replaces a native <select>.
 * Props:
 *  - options: array of { value, label }
 *  - value, onChange
 */
const PlatformDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    window.addEventListener("pointerdown", handleOutside);
    return () => window.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Keyboard support: ArrowDown/ArrowUp to navigate, Enter/Escape
  useEffect(() => {
    if (!open || !listRef.current) return;
    const items = Array.from(listRef.current.querySelectorAll("[role='option']"));
    let idx = items.findIndex((el) => el.getAttribute("data-value") === value);
    if (idx < 0) idx = 0;
    items[idx].focus();

    function onKey(e) {
      if (!["ArrowDown","ArrowUp","Enter","Escape"].includes(e.key)) return;
      e.preventDefault();
      if (e.key === "Escape") return setOpen(false);
      if (e.key === "Enter") {
        const v = document.activeElement.getAttribute("data-value");
        if (v) onChange(v);
        setOpen(false);
        return;
      }
      if (e.key === "ArrowDown") {
        const next = document.activeElement.nextElementSibling || items[0];
        next.focus();
      }
      if (e.key === "ArrowUp") {
        const prev = document.activeElement.previousElementSibling || items[items.length-1];
        prev.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, value, onChange]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left bg-transparent p-0 focus:outline-none"
      >
        <div className="px-4 py-2 rounded-lg bg-white">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Platform</label>
          <div className="flex items-center justify-between">
            <span className="text-gray-900">{options.find(o => o.value === value)?.label || options[0].label}</span>
            <svg className="ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="absolute z-40 mt-2 w-full rounded-lg bg-white shadow-lg ring-1 ring-gray-200"
          style={{ minWidth: 0 }}
        >
          {options.map((opt, i) => {
            const selected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                tabIndex={0}
                data-value={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { onChange(opt.value); setOpen(false); }
                }}
                className={
                  "px-5 py-3 text-sm cursor-pointer focus:bg-gray-100 " +
                  (selected ? "bg-gray-100 font-semibold" : "hover:bg-gray-50")
                }
              >
                <div className="text-gray-900">{opt.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlatformDropdown;
