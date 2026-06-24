import { useEffect, useState } from 'react';
import { fetchModels } from '../api';

interface ModelPickerProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export default function ModelPicker({ selectedModel, onModelChange }: ModelPickerProps) {
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    fetchModels().then(setModels);
  }, []);

  return (
    <div className="model-picker">
      <label htmlFor="model-select">Model:</label>
      <select 
        id="model-select" 
        value={selectedModel} 
        onChange={(e) => onModelChange(e.target.value)}
      >
        {models.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
}
