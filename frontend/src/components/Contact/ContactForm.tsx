import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    information: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Form sent", {
      position: "bottom-center",
      style: {
        borderRadius: "4px",
        background: "#EDDFE0",
        color: "#705C53",
        boxShadow: "none",
      },
    });
  };

  return (
    <div className="opacity-0">
      <form className="flex flex-col space-y-8 my-4" onSubmit={handleSubmit}>
        <div className="font-custom"></div>
        <TextField
          variant="standard"
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          variant="standard"
          label="Your Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextField
          variant="standard"
          label="Information"
          name="information"
          value={formData.information}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
