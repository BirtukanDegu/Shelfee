import { useFormContext } from "react-hook-form";

export const useGetValue = (
  variableName: string,
  defaultValue?: string
): string => {
  const { watch } = useFormContext();
  const value = watch(variableName, defaultValue);
  return value;
};

export const useItemParams = (): Section[] => {
  const { watch } = useFormContext();
  const value = watch("sections", []);
  return value;
};
