// src/components/FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
