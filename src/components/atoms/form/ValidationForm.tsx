import { User } from "@/app/page";
import React, { useState } from "react";
import { userSchema } from "@/components/validations/schema";
import { ErrorsMessages, InputForm, Label } from ".";
import { Input } from ".";

// 1. UseEffect = when to use it, what is side effect, use effect with no dependency, with dependencies
// 2. Context API= What is Context API? When to use? How to use it?

interface FormAddProps {
  addNewUser: (user: User) => void;
}

const ValidationForm = ({ addNewUser }: FormAddProps) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    profile: null,
  });
  const [errors, setErrors] = useState({
    username: "",
    profile: "",
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
    <InputForm className="px-10 py-5 bg-white" onSubmit={handleOnSubmit}>

      <Input
        className="text-black border rounded-md border-black m-2 focus:ring-2 outline-none px-5 py-2"
        type="text"
        name="username"
        value={user.username}
        placeholder="username"
        onChange={handleOnChange}
        label="username"
        error={errors.username}
      />

      <Input
        className="text-black"
        type="file"
        name="profile"
        placeholder="profile"
        onChange={handleOnUploadFile}
        label="profile"
        error={errors.profile}
      />

      <button
        className="px-10 py-1 bg-green-600 rounded-full mt-5"
        type="submit"
      >
        Submit
      </button>
    </InputForm>
  );
};

export { ValidationForm };
