import { useState ,useEffect} from "react";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
import UploadWantedCriminals from "./UploadWantedCriminals";
import axios from "axios";


const WantedCriminals = () => {
  const navigate = useNavigate();
  

  const handleCreate = () => {
    navigate("/uploadcriminals");
  };

  const [wantedCriminals, setWantedCriminal] = useState([]);
     
  useEffect(() => {
    axios.get("http://localhost:5000/wanted").then((response) => {
      setWantedCriminal(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/wanted/${id}`)
      .then((response) => {
        setWantedCriminal(wantedCriminals.filter((wanted) => wanted._id !== id));
      });
  };

  const [showCreateForm, setShowCreateForm] = useState(false);
    
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Wanted Criminals" />
      <div className="flex justify-end mb-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreate}
        >
          Upload Criminals
        </button>
      </div>

      {showCreateForm && (
        <UploadWantedCriminals setShowCreateForm={setShowCreateForm} />
      )}
      <div className="flex flex-col space-y-4">
        {wantedCriminals.map((criminal) => (
          <div key={criminal._id} className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(criminal._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            
            <div className="mt-4"><img src={`data:image/jpeg;base64,${criminal.image}`} alt={`Photo of ${criminal.name}`} className="w-32 h-32 rounded-lg" /></div>
            <div className="font-bold text-lg mt-2">Name: <span className="font-light">{criminal.name}</span></div>
            <div className="font-bold text-lg mt-2">Description: <span className="font-light">{criminal.description}</span></div>

          </div>
        ))}
      </div>
    </div>
  );
};


export default WantedCriminals
