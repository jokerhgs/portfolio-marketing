// Reusable component for Feature Header & Sub-header
interface FeatureHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}
export const FeatureHeader: React.FC<FeatureHeaderProps> = ({
  icon,
  title,
  subtitle,
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      {icon && <span className="text-primary text-3xl">{icon}</span>}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
    <p className="text-lg text-secondary-foreground">{subtitle}</p>
  </div>
);
