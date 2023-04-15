import { Header } from '../components';
import { useNavigate, Link } from 'react-router-dom';

const CreatePoliceStation = () => {
  
    const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate('/police%20station');
    };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
      <Header title="Create Police Station" />
      <div className="bg-white rounded-lg p-8">
      <div className="flex justify-end mb-4">
          <button
            className="bg-green-500 text-white font-bold px-5 py-2 rounded-md mr-4"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>

        <form className="space-y-2">
          <div className="flex justify-end">

          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-2 rounded-md border-gray-300 p-2 "
              placeholder="Bani Gala "
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-bold">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="border-2 rounded-md border-gray-300 p-2"
              placeholder="(051) 9330977"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border-2 rounded-md border-gray-300 p-2"
              placeholder="BaniGalaStation@example.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border-2 rounded-md border-gray-300 p-2"
              required
            />
          </div>
          <div className="flex justify-left">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePoliceStation;
