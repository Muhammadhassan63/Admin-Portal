import { useState, useEffect } from "react";

import { Header } from "../components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CreatePoliceStation from "./CreatePoliceStation.jsx";

const PoliceStation = () => {
  const [policeStations, setPoliceStations] = useState([
    {
      _id: 1,
      name: "Bani Gala",
      address: "Address 1",
      phone: "(051) 9330977",
    },
    {
      _id: 2,
      name: "Police Station 2",
      address: "Address 2",
      phone: "555-5678",
    },
    {
      _id: 3,
      name: "Police Station 3",
      address: "Address 3",
      phone: "555-9012",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/station").then((response) => {
      setPoliceStations(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/station/${id}`)
      .then((response) => {
        setPoliceStations(
          policeStations.filter((policestation) => policestation._id !== id)
        );
      });
  };

  const handleUpdate = (id) => {
    navigate(`/stations/${id}/edit`);
  };

  const handleCreate = () => {
    navigate("/stationcreate");
  };

  const formatHeaderText = (headerText) => (
    <span className="font-bold text-green-600 text-lg">{headerText}</span>
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Police Station" />
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
        {policeStations.map((policestation) => (
          <div key={policestation._id} className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between">
              <div className="font-bold text-lg">{policestation.username}</div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(policestation._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(policestation._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div>{policestation.name}</div>
            <div>{policestation.address}</div>
            <div>{policestation.phone}</div>
          </div>
        ))}
      </div>
    </div>
      
  );
};

export default PoliceStation;
