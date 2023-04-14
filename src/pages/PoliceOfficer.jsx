import { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CreatePoliceStation from "./CreatePoliceStation.jsx";

const PoliceOfficer = () => {
  const [policeOfficers, setPoliceOfficers] = useState([
    {
      _id: 1,
      name: "Bani Gala",
      address: "Address 1",
      phone: "(051) 9330977",
      location: "faizabad",
    },
    {
      _id: 2,
      name: "Police Station 2",
      address: "Address 2",
      phone: "555-5678",
      location: "faizabad",
    },
    {
      _id: 3,
      name: "Police Station 3",
      address: "Address 3",
      phone: "555-9012",
      location: "faizabad",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/police-stations").then((response) => {
      setPoliceOfficers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/police-stations/${id}`)
      .then((response) => {
        setPoliceOfficers(
          policeOfficers.filter((station) => station._id !== id)
        );
      });
  };

  const handleUpdate = (id) => {
    navigate(`/police-stations/${id}/edit`);
  };

  const handleCreate = () => {
    navigate("/police-stationcreate");
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
      <GridComponent dataSource={policeOfficers} height={400}>
        <ColumnsDirective >
          <ColumnDirective
            field="name"
            headerText="Name"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Name</div>
            )}
          />

          <ColumnDirective field="address"
            headerText="Address"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Address</div>
            )}/>
          <ColumnDirective field="phone"
            headerText="Phone"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Phone</div>
            )}/>

          <ColumnDirective field="location"
            headerText="Location"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Location</div>
            )}/>
          <ColumnDirective
            
            headerText="Actions"
            headerTemplate={() => (
              <div className="font-bold text-black text-base ">Actions</div>
            )}
            template={(data) => (
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white bold py-2 px-2 rounded"
                  onClick={() => handleUpdate(data._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white bold py-2 px-2 rounded"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
              </div>
            )}
          />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default PoliceOfficer;
