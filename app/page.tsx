"use client";

import { useState, FormEvent } from "react";

import { handleFile } from "./handleFile";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await handleFile(file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <input type="submit" />
    </form>
  );
}
