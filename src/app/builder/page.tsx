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
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { Download } from 'lucide-react';

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
      <aside className="w-64 border-r border-border overflow-auto flex flex-col">
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-4">
            <MainNav />

            <ThemeToggle />
          </div>
          <h2 className="text-lg font-semibold mb-2">Layout Builder</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Headers</h3>
            {renderOptions('header')}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Main Content</h3>
            {renderOptions('main')}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Footers</h3>
            {renderOptions('footer')}
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <h3 className="font-medium mb-2">Customize</h3>
          {selectedComponents.header && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={headerConfig.companyName}
                onChange={(e) => {
                  setHeaderConfig((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }));
                }}
                className="w-full px-2 py-1 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              />
            </div>
          )}
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div>
          <div className="flex justify-between items-center mb-4 m-4">
            <h2 className="text-xl font-semibold">Preview</h2>
            <button
              onClick={exportComponent}
              className="px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition duration-300 flex items-center gap-2 text-sm"
            >
              <Download size={16} /> Export
            </button>
          </div>
          <div className="h-px bg-border my-2"></div>
          <div className="border border-border rounded-lg overflow-hidden m-4">
            {renderPreview()}
          </div>
        </div>
      </main>
    </div>
  );
}
