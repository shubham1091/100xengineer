import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { config } from "../config";

export const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            initialValue={defaultValue}
            value={value}
            apiKey={config.tinyMceKey}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic forecolor backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; }",
              image_advtab: true,
              branding: false,
              resize: false,
              statusbar: false,
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};
