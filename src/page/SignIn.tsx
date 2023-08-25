import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserCredential } from "firebase/auth/cordova";
import { Await, useNavigate } from "react-router";

const SignIn = () => {
  let navigate = useNavigate();
  const signInWithGoogle = async () => {
    const userCred: UserCredential | null = await signInWithPopup(
      auth,
      googleProvider
    );
    console.log(userCred);
    if (userCred != null) {
      navigate("/home");
    }
  };
  return (
    <div className=" w-full flex-col flex  bg-white ">
      <div className="w-full h-full min-h-screen  flex-col flex items-center justify-center  px-8 py-12">
        <div className=" bg-black text-white gap-4 rounded-lg flex flex-col justify-center items-center w-full  max-w-md px-12 py-20 ">
          <h1 className=" font-bold text-lg ">Here is your calcultor</h1>
          <button
            className="w-full border-2 border-neutral-600 border-opacity-30 flex justify-center items-center gap-2 px-4 py-4 rounded-lg font-bold bg-white text-black"
            onClick={signInWithGoogle}
          >
            <span>Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
