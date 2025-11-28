export const Input = ({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  extraLabel,
  ...props
}: {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  extraLabel?: React.ReactNode;
}) => (
  <div>
    <label
      className="text-sm font-medium mb-1 flex items-center gap-2"
      htmlFor={id}
    >
      {Icon && <Icon className="text-primary w-5 h-5" />}
      {label}
      {extraLabel}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
      placeholder={placeholder}
      {...props}
    />
  </div>
);
