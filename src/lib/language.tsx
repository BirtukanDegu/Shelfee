import {
  US,
  ET,
  EU,
  KR,
  IL,
  RU,
  BR,
  TW,
  FlagComponent,
} from "country-flag-icons/react/1x1";

export const languageList: {
  value: string;
  label: string;
  details: {
    country: string;
    languageName: string;
    nativeName: string;
    isoCode: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: "en",
    label: "English",
    details: {
      country: "United States",
      languageName: "English",
      nativeName: "English",
      isoCode: "en",
      icon: US,
      iconName: "US",
    },
  },
  {
    value: "am",
    label: "Amharic",
    details: {
      country: "Ethiopia",
      languageName: "Amharic",
      nativeName: "አማርኛ",
      isoCode: "am",
      icon: ET,
      iconName: "ET",
    },
  },
  {
    value: "fr",
    label: "French",
    details: {
      country: "European Union",
      languageName: "French",
      nativeName: "Français",
      isoCode: "fr",
      icon: EU,
      iconName: "EU",
    },
  },
  {
    value: "ko",
    label: "Korean",
    details: {
      country: "South Korea",
      languageName: "Korean",
      nativeName: "한국어",
      isoCode: "ko",
      icon: KR,
      iconName: "KR",
    },
  },
  {
    value: "he",
    label: "Hebrew",
    details: {
      country: "Israel",
      languageName: "Hebrew",
      nativeName: "עברית",
      isoCode: "he",
      icon: IL,
      iconName: "IL",
    },
  },
  {
    value: "ru",
    label: "Russian",
    details: {
      country: "Russia",
      languageName: "Russian",
      nativeName: "Русский",
      isoCode: "ru",
      icon: RU,
      iconName: "RU",
    },
  },
  {
    value: "pt",
    label: "Portuguese",
    details: {
      country: "Brazil",
      languageName: "Portuguese",
      nativeName: "Português",
      isoCode: "pt",
      icon: BR,
      iconName: "BR",
    },
  },
  {
    value: "zh",
    label: "Chinese",
    details: {
      country: "Taiwan",
      languageName: "Chinese",
      nativeName: "中文",
      isoCode: "zh",
      icon: TW,
      iconName: "TW",
    },
  },
];
