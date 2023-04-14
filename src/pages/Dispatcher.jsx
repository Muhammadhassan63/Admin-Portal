import { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { useNavigate, Routes, Route } from "react-router-dom";

import axios from "axios";
import CreateDispatcher from "./CreateDispatcher.jsx";

const Dispatcher = () => {
  //const [dispatchers, setDispatchers] = useState([]);(add this to get dynamic data)
  const [dispatchers, setDispatchers] = useState([
    {
      _id: 1,
      name: "Hassan",
      email: "hassan@example.com",
      phone: "555-1234",
    },
    {
      _id: 2,
      name: "Peters",
      email: "peters@example.com",
      phone: "555-5678",
    },
    {
      _id: 3,
      name: "sanaullah",
      email: "sanaullah@example.com",
      phone: "555-9012",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/dispatchers").then((response) => {
      setDispatchers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/dispatchers/${id}`)
      .then((response) => {
        setDispatchers(
          dispatchers.filter((dispatcher) => dispatcher._id !== id)
        );
      });
  };

  const handleUpdate = (id) => {
    navigate(`/dispatchers/${id}/edit`);
  };

  const handleCreate = () => {
    navigate("/dispatchercreate");
  };

  const formatHeaderText = (headerText) => (
    <span className="font-bold text-green-600 text-lg">{headerText}</span>
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Dispatcher" />
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
        <CreateDispatcher setShowCreateForm={setShowCreateForm} />
      )}
      <GridComponent dataSource={dispatchers} height={400}>
        <ColumnsDirective >
          <ColumnDirective
            field="name"
            headerText="Name"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Name</div>
            )}
          />

          <ColumnDirective field="email"
            headerText="Email"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Email</div>
            )}/>
          <ColumnDirective field="name"
            headerText="Phone"
            headerTemplate={() => (
              <div className="font-bold text-black text-base">Phone</div>
            )}/>
          <ColumnDirective
            
            headerText="Actions"
            headerTemplate={() => (
              <div className="font-bold text-black text-base ">Actions</div>
            )}
            template={(data) => (
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdate(data._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

export default Dispatcher;
