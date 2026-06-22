import { useChatModel } from '../state/AppContext';
import { AI_MODELS as models } from '../../../common/shared';

// TODO: Replace this static list with `const { data: models = [] } = useModels();`

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
