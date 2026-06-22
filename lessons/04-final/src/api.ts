export async function fetchModels(): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return ['gpt-4', 'gpt-3.5-turbo', 'claude-3-opus', 'llama-3'];
}

export async function sendMessageApi(text: string, model: string): Promise<{ role: 'assistant'; content: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    role: 'assistant',
    content: `Response from ${model}: This is a simulated response to "${text}"`
  };
}
