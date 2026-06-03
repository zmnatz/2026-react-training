import { useModels } from '../hooks/useModels';
import { useChatModel } from '../state/app';

export default function ModelPicker() {
  const [model, setModel] = useChatModel();
  const { data: models = [], isLoading } = useModels();

  if (isLoading) return <div>Loading models...</div>;

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
