import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CateringTab = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 gap-5 justify-between overflow-auto">
      <div className="flex flex-col mb-12 w-[80%] mx-auto">
        <h4 className="text-4xl my-12 font-bold text-red-500">
          We Catering for Every Occasion
        </h4>
        <br />
        <p>
          Make your next event unforgettable with our expertly crafted dishes,
          tailored to fit any gathering. Whether it&rsquo;s a corporate meeting,
          family celebration, or a large party, our diverse menu of authentic
          Filipino, Thai, Burmese, and Chinese cuisine will impress your guests
          with bold flavors and fresh ingredients. Let us handle the details, so
          you can focus on enjoying the moment. Contact us today to customize
          your catering experience and bring the taste of tradition to your
          table!
        </p>
        <div className="flex my-5 justify-end pl-5 gap-5">
          <section className="pt-[7%]">
            <Button variant="contained" color="error" className="">
              <Link href="/menu">Full Menu</Link>
            </Button>
          </section>
        </div>
      </div>
      <Divider />
      <div className="mt-12">
        <CateringInquiryForm />
      </div>
    </div>
  );
};

export default CateringTab;

const CateringInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestCount: "",
    eventType: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend or API)
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 my-10 w-[80%] mx-auto">
      <h4 className="text-4xl my-12 font-bold text-red-500">
        Cater Inquiry Form
      </h4>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
        sx={{
          "& label.Mui-focused": {
            color: "red", // Label when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "red",
            },
          },
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
        type="email"
        sx={{
          "& label.Mui-focused": {
            color: "red", // Label when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "red",
            },
          },
        }}
      />
      <TextField
        label="Guest Count"
        name="guestCount"
        value={formData.guestCount}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
        type="number"
        sx={{
          "& label.Mui-focused": {
            color: "red", // Label when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "red",
            },
          },
        }}
      />
      <FormControl fullWidth required variant="outlined">
        <InputLabel
          sx={{
            "&.Mui-focused": {
              color: "red", // Label when focused
            },
          }}
        >
          Event Type
        </InputLabel>
        <Select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          label="Event Type"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "red",
              },
              "&.Mui-focused fieldset": {
                borderColor: "red",
              },
            },
          }}
        >
          <MenuItem value="Corporate Event">Corporate Event</MenuItem>
          <MenuItem value="Family Celebration">Family Celebration</MenuItem>
          <MenuItem value="Large Party">Large Party</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Additional Notes"
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        sx={{
          "& label.Mui-focused": {
            color: "red", // Label when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "red",
            },
          },
        }}
      />
      <Button className="w-20" type="submit" variant="contained" color="error">
        Submit
      </Button>
    </form>
  );
};
