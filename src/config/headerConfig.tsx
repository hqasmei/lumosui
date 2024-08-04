// headerConfigs.ts
export interface HeaderConfig {
  companyName: string;
  navItems: string[];
  // Add more configurable items as needed
}

export const defaultHeader1Config: HeaderConfig = {
  companyName: 'Logo',
  navItems: ['Home', 'About', 'Contact'],
};

export const defaultHeader2Config: HeaderConfig = {
  companyName: 'Logo',
  navItems: ['Home', 'Products', 'About', 'Contact'],
};
