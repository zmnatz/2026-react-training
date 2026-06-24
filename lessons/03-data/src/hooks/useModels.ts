import { useQuery } from '@tanstack/react-query';
import { fetchModels } from '../api';

// TODO: Implement the useModels hook here.
//
// Hint: Use `useQuery` from '@tanstack/react-query' to fetch the list of available models.
// `useQuery` is designed for fetching data (read operations).
// It requires:
// - a `queryKey`: A unique array used to identify and cache the data.
// - a `queryFn`: An asynchronous function that returns the data you want to fetch.
//
// `useQuery` automatically manages loading, error, and success states for you.

export function useModels() {
  return useQuery({
    queryKey: [], // TODO: give this query a unique key
    queryFn: fetchModels,
  });
}
