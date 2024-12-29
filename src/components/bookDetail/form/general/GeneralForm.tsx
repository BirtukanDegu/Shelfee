"use client";
import CustomTextInput from "../../ui/customTextInput";
import DateInput from "../../ui/dateInput";

export const GeneralForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 dark:text-brand-cream">General</p>
    <CustomTextInput
      label="Book Title"
      placeholder="BOOK-01"
      variableName="bookName"
    />
    <DateInput label="Start date" variableName="issueDate" />
    <DateInput label="Finish date" variableName="dueDate" />
  </div>
);
