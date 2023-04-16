import React, { useState } from "react";
import { Header } from "../components";

const UploadWantedCriminals = () => {
  const [criminalName, setCriminalName] = useState("");
  const [image, setImage] = useState("");
  

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("criminalName", criminalName);
    formData.append("image", image);
    // Submit the form data to your backend API endpoint
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Other Options" title="Upload Wanted Criminals" />

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="criminalName">
            Criminal Name
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="criminalName"
            type="text"
            value={criminalName}
            onChange={(event) => setCriminalName(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Upload
        </button>
      </form>

      
    </div>
  );
};

export default UploadWantedCriminals;
