import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "/src/supabase/supabase.js";

// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { useEffect } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [user,SetUser] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      
    const result = await supabase.auth.signInWithOtp({
     email
    });
    console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    const session = async ()=> {
      const { result, error}= await supabase.auth.getSession();
      SetUser(result?.user);
      console.log(error)
    
    }
    session();
    
  })
  




  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-black mb-8">
          Iniciar <span className="text-primary">sesión</span>
        </h1>
        <form className="mb-8" onSubmit={handleSubmit} >

          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-8">
          
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/olvide-password"
            className="hover:text-primary transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registro"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
          <span>
            {user ? (<span> Autenticado </span>) : (<span>No esta autenticado</span>) }
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
