'use client';

import React, { useState } from 'react';

import Footer1 from '@/components/footer/footer-1';
import Footer2 from '@/components/footer/footer-2';
import Header1 from '@/components/header/header-1';
import Header2 from '@/components/header/header-2';
import MainNav from '@/components/main-nav';
import Main1 from '@/components/main/main-1';
import Main2 from '@/components/main/main-2';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeaderConfig } from '@/config/headerConfig';
import useMediaQuery from '@/hooks/use-media-query';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { Download, Settings, X } from 'lucide-react';
import SideNav from '@/components/side-nav';

type ComponentType = React.ComponentType<any>;

type ComponentSection = 'header' | 'main' | 'footer';

interface ComponentMap {
  [key: string]: {
    [key: string]: ComponentType;
  };
}

const components: ComponentMap = {
  header: { Header1, Header2 },
  main: { Main1, Main2 },
  footer: { Footer1, Footer2 },
};

interface LayoutState {
  header: string;
  main: string;
  footer: string;
}

interface SelectedComponents {
  header: string | null;
  main: string | null;
  footer: string | null;
}

export default function TestingPage() {
  const [selectedComponents, setSelectedComponents] =
    useState<SelectedComponents>({
      header: 'Header2',
      main: 'Main2',
      footer: 'Footer2',
    });
  const [layout, setLayout] = useState<LayoutState>({
    header: 'Header2',
    main: 'Main2',
    footer: 'Footer2',
  });
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>(
    'desktop',
  );

  // Single headerConfig state
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({
    companyName: 'Logo',
    navItems: ['Home', 'Products', 'About', 'Contact'],
  });
  const [activeTab, setActiveTab] = useState('layout');
  const { isMobile } = useMediaQuery();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const renderOptions = (section: ComponentSection) => {
    return (
      <div className="mb-4 flex flex-col gap-1">
        {Object.keys(components[section]).map((componentName) => (
          <button
            key={componentName}
            onClick={() => {
              setSelectedComponents((prev) => ({
                ...prev,
                [section]: componentName,
              }));
              setLayout((prev) => ({ ...prev, [section]: componentName }));
            }}
            className={`block w-full text-left px-4 py-2 text-sm transition-colors rounded-md ${
              selectedComponents[section] === componentName
                ? 'bg-accent text-accent-foreground font-medium'
                : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            {componentName}
          </button>
        ))}
      </div>
    );
  };
  const renderPreview = () => {
    const HeaderComponent = components.header[layout.header];
    const MainComponent = components.main[layout.main];
    const FooterComponent = components.footer[layout.footer];

    return (
      <>
        <HeaderComponent config={headerConfig} />
        <MainComponent />
        <FooterComponent />
      </>
    );
  };

  const exportComponent = async () => {
    const zip = new JSZip();

    for (const section of ['header', 'main', 'footer'] as ComponentSection[]) {
      const componentName = selectedComponents[section];
      if (componentName) {
        const componentCode = components[section][componentName].toString();
        const modifiedCode = componentCode.replace(/export default /, '');
        const finalCode = `'use client';\n\nimport React from 'react';\n\n${modifiedCode}\n\nexport default ${componentName};`;
        zip.file(`${componentName}.tsx`, finalCode);
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'selected-components.zip');
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
       <SideNav 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        renderOptions={renderOptions}
        selectedComponents={selectedComponents}
        headerConfig={headerConfig}
        setHeaderConfig={setHeaderConfig}
      />
      <main className="flex-1 overflow-auto">
        <div className="relative">
          <div className="sticky top-0 z-10 bg-background">
            <div className="flex items-center justify-between border-b border-border h-[69px] p-4">
              <h2 className="text-xl font-semibold">Preview</h2>
              <div className="flex gap-2 items-center">
                <button
                  onClick={exportComponent}
                  className="px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition duration-300 flex items-center gap-2 text-sm"
                >
                  <Download size={16} /> Export
                </button>
                <ThemeToggle className="h-10 w-10" />
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden m-4">
            {renderPreview()}
          </div>
        </div>
      </main>
    </div>
  );
}
