import { AI_MODELS as models } from '../../../common/shared';

// TODO: No props needed
interface ModelPickerProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export default function ModelPicker({ selectedModel, onModelChange }: ModelPickerProps) {
  // TODO: Retrieve model and setModel from AppContext (remove the props)

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
