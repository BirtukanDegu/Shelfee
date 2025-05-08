import CustomNumberInput from "../../ui/customNumberInput";
import CustomTextInput from "../../ui/customTextInput";
import ImageInput from "../../ui/imageInput";

export const AuthorDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Author Details</p>
    <CustomTextInput
      label="Author name"
      placeholder="e.g. Franz Kafka"
      variableName="name"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the details automatically if we find the author.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Author details</p>
    <CustomTextInput
      label="Author name"
      placeholder="Franz Kafka"
      variableName="authorName"
    />
    <ImageInput label="Photo" variableName="authorPhoto" />
    <CustomTextInput
      label="Pen Name"
      placeholder="Franz Kafka"
      variableName="penName"
    />
    <CustomTextInput label="Gender" placeholder="male" variableName="gender" />
    <CustomTextInput
      label="Nationality"
      placeholder="Ethiopian"
      variableName="nationality"
    />
    <CustomNumberInput
      label="Active Years"
      placeholder="e.g. 1883-1924"
      variableName="activeYears"
    />
    <CustomTextInput
      label="Website"
      placeholder="https://www.example.com"
      variableName="website"
    />
  </div>
);
