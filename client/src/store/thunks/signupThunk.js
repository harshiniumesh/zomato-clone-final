import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";
import { useToast } from "@chakra-ui/react";

const signupThunk = createAsyncThunk(
  "signup/registration",
  async ({ name, email, password, imageUrl }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, imageUrl }),
      });
      const data = await response.json();
      if (data.auth) {
        localStorage.setItem("token", data.auth);
        return data.result;
      }
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export { signupThunk };
