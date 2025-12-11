"use client";

import { UploadButton } from "@/features/auth/uploadthing";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-500">
      {/* 📤 Upload button component */}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // ✅ Handle upload success
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // ⚠️ Handle upload error
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
