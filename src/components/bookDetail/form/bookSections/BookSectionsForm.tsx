"use client";
import { Input } from "../../ui/input";
import { Plus, Trash2 } from "lucide-react";
import { Controller } from "react-hook-form";
import { getSectionValue } from "@/lib/getInitialValue";

export const BookSectionsForm = () => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <div className="pt-24">
          <p className="text-2xl font-semibold pb-3 dark:text-brand-cream">
            Book Sections
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="py-3 font-medium text-sm text-neutral-500">
                Chapters/ Sections
              </p>
              {value.map(
                ({ sectionTitle, pages, time }: Section, index: number) => (
                  <div
                    className="flex relative items-center group -ml-8"
                    key={index}
                  >
                    <div
                      className={`w-9 h-7 ${value.length === 1 && "invisible"}`}
                    >
                      <button
                        onClick={() => {
                          const newList = [...value];
                          newList.splice(index, 1);
                          localStorage.setItem(
                            "sections",
                            JSON.stringify(newList)
                          );
                          onChange(newList);
                        }}
                        type="button"
                        className="flex-shrink-0 rounded-md p-1.5 group-hover:bg-gray-50 dark:group-hover:bg-brand-cream/10 hidden group-hover:block cursor-pointer"
                      >
                        <Trash2 className="w-4 text-gray-500 h-4 group-hover:text-brand-red" />
                      </button>
                    </div>
                    <div className="w-full flex-1">
                      <Input
                        placeholder="Section"
                        value={sectionTitle}
                        type="text"
                        onChange={(e) => {
                          const updatedArray = [...value];
                          updatedArray[index] = {
                            sectionTitle: e.target.value,
                            pages,
                            time,
                          };
                          localStorage.setItem(
                            "sections",
                            JSON.stringify(updatedArray)
                          );
                          onChange(updatedArray);
                        }}
                      />
                    </div>
                    <div className="w-14">
                      <Input
                        placeholder="Pages"
                        value={`${pages || ""}`}
                        type="text"
                        pattern="[0-9]*"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            /^-?\d*\.?\d*$/.test(inputValue) ||
                            inputValue === ""
                          ) {
                            const updatedArray = [...value];
                            updatedArray[index] = {
                              sectionTitle,
                              pages: +inputValue,
                              time,
                            };
                            localStorage.setItem(
                              "sections",
                              JSON.stringify(updatedArray)
                            );
                            onChange(updatedArray);
                          }
                        }}
                      />
                    </div>
                    <div className="w-14">
                      <Input
                        placeholder="Time EST."
                        value={`${time || ""}`}
                        type="text"
                        pattern="[0-9]*"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            /^-?\d*\.?\d*$/.test(inputValue) ||
                            inputValue === ""
                          ) {
                            const updatedArray = [...value];
                            updatedArray[index] = {
                              sectionTitle,
                              pages,
                              time: +inputValue,
                            };
                            localStorage.setItem(
                              "sections",
                              JSON.stringify(updatedArray)
                            );
                            onChange(updatedArray);
                          }
                        }}
                      />
                    </div>
                  </div>
                )
              )}
              <div className="py-3 border-dashed border-b border-gray-300 dark:border-brand-cream/20">
                <button
                  onClick={() => {
                    localStorage.setItem(
                      "sections",
                      JSON.stringify([...value, { sectionTitle: "" }])
                    );
                    onChange([...value, { sectionTitle: "" }]);
                  }}
                  type="button"
                  className="flex justify-center items-center text-brand-orange font-medium text-sm gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <p>Add Section</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      name="sections"
      defaultValue={getSectionValue()}
    />
  );
};
