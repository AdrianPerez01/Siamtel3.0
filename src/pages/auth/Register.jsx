import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "/src/supabase/supabase.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navar from "/src/components/Navar.jsx";
import Footer2 from "/src/components/Footer2.jsx";

// Icons
import { RiMailLine } from "react-icons/ri";
const Register = () => {
  //const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await supabase.auth.signInWithOtp({
        email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }

   /* useEffect(() => {
      supabase.auth.onAuthStateChange(async (event)=> {
        if(event!=="SIGNED_OUT"){
          navigate("/admin");
        }else {
          navigate("/")
        }
        console.log(event)
      })
      });*/
    

  };

 

  return (
    <>
      <Navar></Navar>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
          <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8">
            Crear <span className="text-primary">cuenta</span>
          </h1>
          <form className="mb-8" onSubmit={handleSubmit}>
            <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-black">
              Registrate con google
            </button>
            <div className="relative mb-4">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full rounded-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
              >
                Registrarme
              </button>
            </div>
          </form>
          <span className="flex items-center justify-center gap-2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-black transition-colors"
            >
              Ingresa
            </Link>
          </span>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default Register;
