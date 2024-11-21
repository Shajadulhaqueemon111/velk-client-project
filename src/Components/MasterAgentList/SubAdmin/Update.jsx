import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
  const { _id } = useParams();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/master-agent/${_id}`,
        {
          phone_number: phoneNumber,
        }
      );
      toast.success("Successfully Updated!");
      console.log("Phone number updated successfully:", response.data);
    } catch (error) {
      toast.error("Error updating phone number");
      console.error("Error updating phone number:", error);
    }
  };

  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-lg max-w-md mx-auto shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Agent ID */}

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter New Phone Number"
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Update Phone Number
        </button>
      </form>
    </div>
  );
};

export default Update;
