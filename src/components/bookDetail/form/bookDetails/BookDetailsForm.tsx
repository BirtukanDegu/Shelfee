import CustomTextInput from "../../ui/customTextInput";
import CustomNumberInput from "../../ui/customNumberInput";
import ImageInput from "../../ui/imageInput";

export const BookDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Book Details</p>
    <CustomTextInput
      label="Title"
      placeholder="e.g. the metamorphosis"
      variableName="book"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the details automatically if we find the book.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Book details</p>
    <CustomTextInput
      label="Book Title"
      placeholder="e.g. the metamorphosis"
      variableName="bookTitle"
    />
    <ImageInput label="Book Cover / Thumbnail" variableName="thumbnail" />
    <CustomTextInput
      label="Author"
      placeholder="Franz Kafka"
      variableName="bookAuthor"
    />
    <CustomTextInput
      label="Genre"
      placeholder="Fiction"
      variableName="bookGenre"
    />
    <CustomTextInput
      label="Language"
      placeholder="English"
      variableName="bookLanguage"
    />
    <CustomNumberInput
      label="Publisher"
      placeholder="Prolab Inc"
      variableName="bookPublisher"
    />
    <CustomTextInput
      label="Year of Publication"
      placeholder="2023"
      variableName="yearPublished"
    />
  </div>
);
