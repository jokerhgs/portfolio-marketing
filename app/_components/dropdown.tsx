export const Dropdown = ({
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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: string[];
  placeholder?: string;
}) => (
  <div>
    <label
      className="text-sm font-medium mb-1 flex items-center gap-2"
      htmlFor={id}
    >
      {Icon && <Icon className="text-primary w-5 h-5" />}
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary bg-background"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
