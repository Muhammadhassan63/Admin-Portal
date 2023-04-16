import { useState } from "react";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
import UploadWantedCriminals from "./UploadWantedCriminals";
import criminalImage from '../images/download (1).jpg';
import criminalImage2 from '../images/citations.jpg';


const WantedCriminals = () => {
  const navigate = useNavigate();
  

  const handleCreate = () => {
    navigate("/uploadcriminals");
  };

    const [wantedCriminals, setWantedCriminals] = useState([
      {
        _id: 2,
        name: "Dr Basit",
        image: criminalImage2,
        desc:"Database experts, hacks very heavy databases also sells students projects on fiverr."
        
      },
      {
        _id: 1,
        name: "Bhola",
        image: criminalImage,
        desc: "Sells his property to have fun with Russian girl in 5000 dirham."
        
      },
     

 
    ]);
  
    const [showCreateForm, setShowCreateForm] = useState(false);
    
  // //check link
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/api/policeOfficers").then((response) => {
  //       setWantedCriminals(response.data);
  //     });
  //   }, []);
  // //check link
  //   const handleDelete = (id) => {
  //     axios
  //       .delete(`http://localhost:3001/api/policeOfficers/${id}`)
  //       .then((response) => {
  //         setWantedCriminals(
  //           wantedCriminals.filter((officer) => officer._id !== id)
  //         );
  //       });
  //   };
  
    // const handleUpdate = (id) => {
    //   navigate(`/wantedCriminals/${id}/edit`);
    // };
  

 
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
              {/* <div className="font-bold text-lg">{criminal.username}</div> */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={() => handleUpdate(criminal._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={() => handleDelete(criminal._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            
            <div className="mt-4"><img src={criminal.image} alt={`Photo of ${criminal.name}`} className="w-32 h-32 rounded-lg" /></div>
            <div className="font-bold text-lg mt-2">Name: <span className="font-light">{criminal.name}</span></div>
            <div className="font-bold text-lg mt-2">Description: <span className="font-light">{criminal.desc}</span></div>

          </div>
        ))}
      </div>

     
    </div>
  );
};

export default WantedCriminals;
