import { Header } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateDispatcher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dispatcher, setDispatcher] = useState({});

  useEffect(() => {
    const getDispatcher = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/dispatcher/${id}`);
        setDispatcher(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getDispatcher();
  }, [id]);

  const handleBackClick = () => {
    navigate('/dispatcher');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await axios.put(`http://localhost:5000/dispatcher/update/${id}`, {
        username,
        phone,
        email,
        password,
      });

      navigate('/dispatcher');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Update Dispatcher" />
      <div className="bg-white rounded-lg p-8">
        <div className="flex justify-end mb-4">
          <button
            className="bg-green-500 text-white font-bold px-5 py-2 rounded-md mr-4"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex justify-end"></div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-2 rounded-md border-gray-300 p-2 "
            //   placeholder="Sani"
              value={dispatcher.username}
              onChange={(e) => setDispatcher({ ...dispatcher, username: e.target.value })}
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
              placeholder="+923333007499"
              value={dispatcher.phone}
              onChange={(e) => setDispatcher({ ...dispatcher, phone: e.target.value })}
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
              placeholder="sani@example.com"
              value={dispatcher.email}
              onChange={(e) => setDispatcher({ ...dispatcher, email: e.target.value })}
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
              placeholder="********"
              value={dispatcher.password}
              onChange={(e) => setDispatcher({ ...dispatcher, password: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold px-5 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDispatcher;
