"use client";

import { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";

export const MultiselectDropdown = ({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  required = false,
  options,
  placeholder = "Select...",
}: {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  value: string[];
  onChange: (selectedValues: string[]) => void;
  required?: boolean;
  options: string[];
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== option));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label
        className="text-sm font-medium mb-1 flex items-center gap-2"
        htmlFor={id}
      >
        {Icon && <Icon className="text-primary w-5 h-5" />}
        {label}
      </label>
      <div
        className="w-full border border-border rounded px-3 py-2 focus-within:outline-none focus-within:ring focus-within:border-primary bg-background min-h-[42px] cursor-pointer flex items-center flex-wrap gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length === 0 ? (
          <span className="text-muted-foreground">{placeholder}</span>
        ) : (
          value.map((val) => (
            <span
              key={val}
              className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-sm"
            >
              {val}
              <button
                type="button"
                onClick={(e) => removeOption(val, e)}
                className="hover:bg-primary/20 rounded p-0.5"
                aria-label={`Remove ${val}`}
              >
                <MdClose className="w-3 h-3" />
              </button>
            </span>
          ))
        )}
        <svg
          className={`w-5 h-5 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-background border border-border rounded shadow-lg max-h-60 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt}
              className={`px-3 py-2 cursor-pointer hover:bg-muted ${
                value.includes(opt) ? "bg-primary/10 text-primary" : ""
              }`}
              onClick={() => toggleOption(opt)}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`${id}-${opt}`}
                  checked={value.includes(opt)}
                  onChange={() => toggleOption(opt)}
                  className="cursor-pointer"
                  aria-label={opt}
                />
                <label
                  htmlFor={`${id}-${opt}`}
                  className="cursor-pointer flex-1"
                >
                  {opt}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
      {required && value.length === 0 && (
        <input
          type="text"
          id={`${id}-required`}
          required
          className="hidden"
          value=""
          onChange={() => {}}
          tabIndex={-1}
          aria-label={label}
        />
      )}
    </div>
  );
};
