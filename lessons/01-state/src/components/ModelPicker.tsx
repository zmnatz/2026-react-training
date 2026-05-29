const models = ['gpt-4', 'gpt-3.5-turbo', 'claude-3-opus', 'llama-3'];

interface ModelPickerProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export default function ModelPicker({ selectedModel, onModelChange }: ModelPickerProps) {
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
