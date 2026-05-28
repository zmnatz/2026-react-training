import { useChatModel } from '../state/chat';

const models = ['gpt-4', 'gpt-3.5-turbo', 'claude-3-opus', 'llama-3'];

export default function ModelPicker() {
  const [model, setModel] = useChatModel();

  return (
    <div className="model-picker">
      <label htmlFor="model-select">Model:</label>
      <select 
        id="model-select" 
        value={model} 
        onChange={(e) => setModel(e.target.value)}
      >
        {models.map(modelName => (
          <option key={modelName} value={modelName}>{modelName}</option>
        ))}
      </select>
    </div>
  );
}
