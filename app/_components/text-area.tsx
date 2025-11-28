export const TextArea = ({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  required = false,
  rows = 2,
  placeholder,
  extraLabel,
  ...props
}: {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
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
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="w-full border border-border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary resize-none"
      placeholder={placeholder}
      {...props}
    />
  </div>
);
