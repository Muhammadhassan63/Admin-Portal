import { useState, useEffect } from "react";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CreatePoliceStation from "./CreatePoliceStation.jsx";

const PoliceOfficer = () => {
  const [policeOfficers, setPoliceOfficers] = useState([
    {
      _id: 1,
      name: "Ali",
      email: "xyz.gmail",
      phone: "(051) 9330977",
      location: "faizabad",
    },
    {
      _id: 2,
      name: "Haris",
      email: "xyz2.gmail",
      phone: "555-5678",
      location: "faizabad",
    },
    {
      _id: 3,
      name: "Anis",
      email: "xyz3.gmail",
      phone: "555-9012",
      location: "faizabad",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();
//check link
useEffect(() => {
  axios.get("http://localhost:5000/officer").then((response) => {
    setPoliceOfficers(response.data);
    
  });
}, []);

const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/officer/${id}`)

    .then((response) => {
      setPoliceOfficers(
        policeOfficers.filter((officer) => officer._id !== id)
      );
    });
};

  const handleUpdate = (id) => {
    navigate(`/officer/update/${id}`);
  };

  const handleCreate = () => {
    navigate("/createofficer");
  };

  const formatHeaderText = (headerText) => (
    <span className="font-bold text-green-600 text-lg">{headerText}</span>
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Police Officer" />
      <div className="flex justify-end mb-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>

      {showCreateForm && (
        <CreatePoliceStation setShowCreateForm={setShowCreateForm} />
      )}

<div className="flex flex-col space-y-4">
        {policeOfficers.map((officer) => (
          <div key={officer._id} className="bg-gray-100 p-4 rounded shadow-md">
            <div className="flex justify-between">
              <div className="font-bold text-lg">{officer.username}</div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(officer._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(officer._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div>{officer.name}</div>
            <div>{officer.email}</div>
            <div>{officer.phone}</div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default PoliceOfficer;
