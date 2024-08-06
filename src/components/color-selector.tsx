import React from 'react';

const colorOptions = [
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Purple', value: 'bg-purple-600' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Red', value: 'bg-red-500' },
  {
    name: 'Radial Purple',
    value: 'custom-radial-purple',
    style: {
      background: 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)',
    },
  },
  {
    name: 'Dark Gradient',
    value: 'custom-dark-gradient',
    component: () => (
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
    ),
  },
  // Add more color options or gradients as needed
];

const ColorSelector = ({
  headerConfig,
  setHeaderConfig,
}: {
  headerConfig: any;
  setHeaderConfig: any;
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Background Color</label>
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            onClick={() => {
              setHeaderConfig((prev: any) => ({
                ...prev,
                backgroundColor: color.value,
                backgroundStyle: color.style,
                backgroundComponent: color.component,
              }));
            }}
            className={`w-8 h-8 rounded-md overflow-hidden border border-accent ${
              !color.style && !color.component ? color.value : ''
            } ${
              headerConfig.backgroundColor === color.value
                ? 'ring-2 ring-offset-2 ring-black'
                : ''
            }`}
            style={color.style}
            title={color.name}
            aria-label={`Select ${color.name}`}
          >
            {color.component && <color.component />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
