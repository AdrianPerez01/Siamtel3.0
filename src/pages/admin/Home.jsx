import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import CardTicket from "../../components/CardTicket";
//import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
//import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
//import "@szhsin/react-menu/dist/index.css";
//import "@szhsin/react-menu/dist/transitions/slide.css";
import { supabase } from "/src/supabase/supabase.js";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();


  async function signOutUser(){
    const {error } = await supabase.auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-2xl text-black my-10">Citas Medicas</h1>
        <button onClick={()=> signOutUser()}
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
             Cerrar sesión
          </button>
      </div>
    </div>
  );
};

export default Home;
