import { useEffect, useState } from 'react';
import { fetchModels } from '../api';

// TODO: No props needed
interface ModelPickerProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export default function ModelPicker({ selectedModel, onModelChange }: ModelPickerProps) {
  // TODO: Use the useChatModel hook from '../state/AppContext' to get the active model and its setter (remove the props)
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
