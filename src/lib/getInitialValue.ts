"use client";
export const getInitialValue = (
  variableName: string,
  defaultValue?: string
): string => {
  try {
    return localStorage.getItem(variableName) || defaultValue || "";
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return defaultValue || "";
  }
};

export const getSectionValue = (): Section[] => {
  try {
    return getSections(localStorage.getItem("sections"));
  } catch (error) {
    console.error("Error while getting item from local storage:", error);
    return [
      {
        sectionTitle: "",
      },
    ];
  }
};

const getSections = (sections?: string | null): Section[] => {
  if (!sections)
    return [
      {
        sectionTitle: "",
      },
    ];
  try {
    return JSON.parse(sections);
  } catch {
    return [
      {
        sectionTitle: "",
      },
    ];
  }
};
