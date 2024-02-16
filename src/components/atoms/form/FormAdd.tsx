import { User } from "@/app/page";
import React, { useState } from "react";
import { userSchema } from "@/components/validations/schema";

// 1. UseEffect = when to use it, what is side effect, use effect with no dependency, with dependencies
// 2. Context API= What is Context API? When to use? How to use it?

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const FormAdd = ({ addNewUser }: FormAddProps) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: null,
  });
  const [errors, setErrors] = useState({
    username: "",
    profile: "asdfghjkl",
  });

  const validateForm = async (name, value) => {
    try {
      await userSchema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      console.log("Error", error);
      setErrors((prev) => ({ ...prev, [name]: error.message }));
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if there is an error message for the profile
    if (errors.profile) {
      return;
    }

    try {
      await userSchema.validate(user, { abortEarly: false });

      const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
      const newUser = { ...user, id: newId };
      addNewUser((prevUsers) => {
        return [...prevUsers, newUser];
      });
    } catch (error) {
      console.log("error", error);
      const fieldErrors = {};

      // Error From Yup
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
  };

  // Get the value from the input fields:
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    validateForm(name, value);
  };

  const handleOnUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    validateForm(e.target.name, file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          profile: imageUrl,
        };
      });
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        className="text-black border rounded-md border-black m-2 focus:ring-2 outline-none px-2"
        type="text"
        id="name"
        name="username"
        value={user.username}
        onChange={handleOnChange}
      />
      {errors.username && (
        <div className="error-message text-red-500">{errors.username}</div>
      )}
      <br />

      <label htmlFor="image">Image:</label>
      <input
        className="border rounded-md border-black m-2"
        type="file"
        accept="image/*"
        name="profile"
        onChange={handleOnUploadFile}
      />
      {errors.profile && (
        <div className="error-message text-red-500">{errors.profile}</div>
      )}
      <br />
      <button className=" mt-3 border rounded-md border-slate-700 p-1 bg-slate-300 text-black">
        Submit
      </button>
    </form>
  );
};

export { FormAdd };
