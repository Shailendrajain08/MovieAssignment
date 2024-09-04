import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = { name, password, email, phone, profession };
    localStorage.setItem('user', JSON.stringify(userData));

    alert('Signup successful!');
    navigate('/login')
  };

    return (
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form
            onSubmit={handleSignup}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-2 mb-4 border rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="block w-full p-2 mb-4 border rounded"
            />
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
              className="block w-full p-2 mb-4 border rounded"
            >
              <option value="" disabled>
                Select Profession
              </option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
              <option value="Artist">Artist</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Signup;
