export interface HeaderConfig {
  companyName: string;
  navItems: string[];
  backgroundColor: string;
  backgroundStyle?: React.CSSProperties;
  backgroundComponent?: React.ComponentType;
}
export const defaultHeader1Config: HeaderConfig = {
  companyName: 'Logo',
  navItems: ['Home', 'About', 'Contact'],
  backgroundColor: 'bg-blue-500',
};

export const defaultHeader2Config: HeaderConfig = {
  companyName: 'Logo',
  navItems: ['Home', 'Products', 'About', 'Contact'],
  backgroundColor: 'bg-purple-600',
};
