import { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg">
      <label className="block mb-2">
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border rounded"
          required 
        />
      </label>

      <label className="block mb-2">
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border rounded"
          required 
        />
      </label>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
