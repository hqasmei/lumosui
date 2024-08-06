'use client';

import React, { useState, useMemo, useCallback } from 'react';

import ColorSelector from '@/components/color-selector';
import MainNav from '@/components/main-nav';
import { fontOptions } from '@/fonts';
import useMediaQuery from '@/hooks/use-media-query';
import { Settings, X } from 'lucide-react';

type ComponentSection = 'header' | 'main' | 'footer';

export default function SideNav({
  activeTab,
  setActiveTab,
  renderOptions,
  selectedComponents,
  headerConfig,
  setHeaderConfig,
  selectedFont,
  setSelectedFont,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  renderOptions: (section: ComponentSection) => JSX.Element;
  selectedComponents: {
    header: string | null;
    main: string | null;
    footer: string | null;
  };
  headerConfig: any;
  setHeaderConfig: (config: any) => void;
  selectedFont: keyof typeof fontOptions;
  setSelectedFont: (font: keyof typeof fontOptions) => void;
}) {
  const { isMobile } = useMediaQuery();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const AsideContent = useMemo(
    () => (
      <>
        <div className="hidden md:flex items-center justify-between border-b border-border h-[69px] p-4">
          <MainNav />
        </div>

        <div className="flex bg-accent rounded-lg p-1 m-2">
          <button
            className={`flex-1 py-1.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'layout'
                ? 'bg-background text-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('layout')}
          >
            Layout
          </button>
          <button
            className={`flex-1 py-1.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'customize'
                ? 'bg-background text-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('customize')}
          >
            Customize
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {activeTab === 'layout' && (
            <div className="flex flex-col p-4">
              <div className="mb-2">
                <h3 className="font-medium mb-2">Headers</h3>
                {renderOptions('header')}
              </div>
              <div className="mb-2">
                <h3 className="font-medium mb-2">Main Content</h3>
                {renderOptions('main')}
              </div>
              <div className="mb-2">
                <h3 className="font-medium mb-2">Footers</h3>
                {renderOptions('footer')}
              </div>
            </div>
          )}

          {activeTab === 'customize' && (
            <div className="p-4">
              {selectedComponents.header && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={headerConfig.companyName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setHeaderConfig((prev: any) => ({
                        ...prev,
                        companyName: e.target.value,
                      }));
                    }}
                    className="w-full px-2 py-1 border border-border rounded focus:outline-none focus:ring-accent focus:ring-1 bg-background"
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Font</label>
                <select
                  value={selectedFont}
                  onChange={(e) =>
                    setSelectedFont(e.target.value as keyof typeof fontOptions)
                  }
                  className="w-full px-2 py-1 border border-border rounded focus:outline-none focus:ring-accent focus:ring-1 bg-background capitalize"
                >
                  {Object.keys(fontOptions).map((font) => (
                    <option key={font} value={font} className="capitalize">
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <ColorSelector
                  headerConfig={headerConfig}
                  setHeaderConfig={setHeaderConfig}
                />
              </div>
            </div>
          )}
        </div>
      </>
    ),
    [
      activeTab,
      headerConfig,
      renderOptions,
      selectedComponents,
      selectedFont,
      setActiveTab,
      setSelectedFont,
      setHeaderConfig,
    ]
  );

  if (isMobile) {
    return (
      <>
        <button
          className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg"
          onClick={() => setIsSheetOpen(true)}
        >
          <Settings size={24} />
        </button>
        {isSheetOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
            <div className="fixed inset-x-0 bottom-0 h-[80vh] bg-background border-t border-border rounded-t-lg shadow-lg transition-transform duration-300 ease-in-out transform translate-y-0">
              <div className="flex justify-between items-center p-4 border-b border-border h-[69px]">
                <MainNav />
                <button onClick={() => setIsSheetOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="overflow-y-auto h-full pb-safe">
                {AsideContent}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className="w-64 border-r border-border overflow-auto flex flex-col">
      {AsideContent}
    </aside>
  );
}
