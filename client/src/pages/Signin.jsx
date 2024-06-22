// Signin.js
import { useState } from "react";
import { Button, TextInput, Alert, Label } from "flowbite-react";
import axios from "axios";
import images from "../assets/images.js";
import "../global.css";
import "./styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok: " + res.statusText);
      }
      const data = await res.json();
      if (!data.success) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex text-center bg-white rounded-xl max-w-6xl h-[80vh] mx-auto mb-20">
      <section className="gradient-flip shadow-lg shadow-gray-400 rounded-xl border-l-2 border-b-2  border-red-600 flex flex-col mx-auto self-center w-[48%] h-auto">
        <img
          src={images.utility.thaiBrand}
          alt="thai rest logo"
          className="self-center w-[50%] my-5"
        />
        <h3 className="titleItem text-center">Signin</h3>
        <section className="flex mx-auto">
          <form onSubmit={handleSubmit} className="">
            <Label>Email Address: </Label>
            <TextInput
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <Label>Password: </Label>
            <TextInput
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />

            <Button
              disabled={loading}
              gradientDuoTone="pinkToOrange"
              className="w-[95%] h-[43px] border-[0.5px] border-yellow-200 my-8 mx-auto"
              type="submit"
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </form>
        </section>
        <p className="text-red-700 mt-5">
          {error ? error.message || "Something went wrong!" : ""}
        </p>
      </section>
    </div>
  );
};

export default Signin;
