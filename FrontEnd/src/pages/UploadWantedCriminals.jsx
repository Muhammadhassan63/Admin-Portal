  import React, { useState } from "react";
  import { Header } from "../components";
  import axios from "axios";
  import { useNavigate, Link } from 'react-router-dom';
  const handleBackClick = () => {
    navigate('/wanted-criminals');
  };
  const UploadWantedCriminals = () => {
    const navigate = useNavigate();
    const [criminalName, setCriminalName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleFileChange = (event) => {
      setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", criminalName);
      formData.append("image", image);
      formData.append("description", description);
      axios
        .post("http://localhost:5000/wanted/add", formData)
        .then((response) => {
          console.log(response.data);
          navigate('/wanted-criminals');
        })
        .catch((error) => console.error(error));
    };

    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Other Options" title="Upload Wanted Criminals" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="criminalName"
            >
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
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
