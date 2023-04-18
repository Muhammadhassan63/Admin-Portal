import { useState, useEffect } from "react";
import { Header } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateStation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/officer/${id}`).then((response) => {
      const { name, phone, email } = response.data;
      setName(name);
      setPhone(phone);
      setEmail(email);
    });
  }, [id]);

  const handleBackClick = () => {
    navigate("/station");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    try {
      await axios.patch(`http://localhost:5000/officer/update/${id}`, {
        name,
        email,
        phone,
        password,
      });

      navigate("/station");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Update Police Station" />
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
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-2 rounded-md border-gray-300 p-2 "
              placeholder="Bani Gala"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className="border-2 rounded-md border-gray-300 p-2 "
              placeholder="(123) 456-7890"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              className="border-2 rounded-md border-gray-300 p-2 "
              placeholder="bani gala@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="border-2 rounded-md border-gray-300 p-2 "
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
        type="submit"
        className="bg-blue-500 text-white font-bold px-5 py-2 rounded-md mt-4"
      >
        Update Police Station
      </button>
    </form>
  </div>
</div>
);
};

export default UpdateStation;
