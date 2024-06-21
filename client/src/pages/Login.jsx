// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Alert, Label } from "flowbite-react";
import axios from "axios";
import images from "../assets/images.js";
import "../global.css";
import "./styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    console.log("Username typed:", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log("Password typed:", value);
  };

  const handleSubmit = async (e) => {};

  return (
    <div className="flex text-center bg-white rounded-xl max-w-6xl h-[80vh] mx-auto mb-20">
      <section className="gradient-flip shadow-lg shadow-gray-400 rounded-xl border-l-2 border-b-2  border-red-600 flex flex-col mx-auto self-center w-[48%] h-auto">
        <img
          src={images.utility.thaiBrand}
          alt="thai rest logo"
          className="self-center w-[50%] my-5"
        />
        <h3 className="titleItem text-center">Login</h3>
        <section className="flex mx-auto">
          <form onSubmit={handleSubmit} className="">
            <Label>Username: </Label>
            <TextInput
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Label>Password: </Label>
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {showAlert && (
              <Alert
                color="red"
                onClose={() => setShowAlert(false)}
                timeout={5000}
              >
                {error}
              </Alert>
            )}
            <Button
              gradientDuoTone="pinkToOrange"
              className="w-[95%] h-[43px] border-[0.5px] border-yellow-200 my-8 mx-auto"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
