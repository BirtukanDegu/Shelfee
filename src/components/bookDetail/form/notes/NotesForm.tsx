import CustomTextInput from "../../ui/customTextInput";
import LanguageInput from "../../ui/languageInput";

export const NotesForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Notes</p>
    <div>
      <p className="pt-3 font-medium text-neutral-500">
        Select book language
      </p>
      <LanguageInput />
    </div>
    <div>
      <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">
        Notes / Thoughts/ Reflections
      </p>
      <CustomTextInput placeholder="Add a note" variableName="note" />
    </div>
  </div>
);
