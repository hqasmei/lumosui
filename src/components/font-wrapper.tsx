import React from 'react';

import { fontOptions } from '@/fonts';

interface FontWrapperProps {
  component: React.ComponentType<any>;
  font: keyof typeof fontOptions;
  props: any;
}

const FontWrapper: React.FC<FontWrapperProps> = ({
  component: Component,
  font,
  props,
}) => {
  const SelectedFont = fontOptions[font];
  return (
    <div className={SelectedFont.className}>
      <Component {...props} />
    </div>
  );
};

export default FontWrapper;
