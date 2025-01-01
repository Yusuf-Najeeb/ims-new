"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, FileText } from "lucide-react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FileUploadInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

export function FileUploadInput({ field }: FileUploadInputProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      field.onChange([...field.value, ...acceptedFiles]);
    },
    [field]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    multiple: true,
    maxSize: MAX_FILE_SIZE,
  });

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = field.value.filter(
      (file: File) => file !== fileToRemove
    );
    field.onChange(updatedFiles);
  };

  return (
    <FormItem>
      <FormLabel>
        Upload file or images{" "}
        <span className="text-muted-foreground">or drag and drop</span>
      </FormLabel>
      <FormControl>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-primary bg-primary/10" : "border-input"
          }`}
        >
          <input {...getInputProps()} />
          <p>Drag &amp; drop files here, or click to select files</p>
          <p className="text-sm text-muted-foreground mt-2">
            (Only .jpg, .jpeg, .png, .webp, .pdf, .doc and .docx files are
            accepted)
          </p>
        </div>
      </FormControl>
      {field.value.length > 0 && (
        <ul className="mt-4 space-y-2">
          {field.value.map((file: File, index: number) => (
            <li
              key={index}
              className="flex items-center justify-between bg-muted p-2 rounded"
            >
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="truncate max-w-xs">{file.name}</span>
              </div>
              <button
                onClick={() => removeFile(file)}
                className="text-destructive hover:text-destructive/80 transition-colors"
                aria-label={`Remove ${file.name}`}
              >
                <X size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <FormMessage />
    </FormItem>
  );
}
