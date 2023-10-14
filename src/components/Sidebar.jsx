import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "/src/supabase/supabase.js";
import { useNavigate } from "react-router-dom";
// Icons
import {
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiMedicineBottleFill,
  RiMenu3Line,
  RiCloseLine,
  RiUserAddFill,
  RiHospitalLine
} from "react-icons/ri";


const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navigate = useNavigate();

  async function signOutUser(){
    const {error } = await supabase.auth.signOut();
    navigate("/");
  }
   
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-black mb-10">
            SIAMTEL
          </h1>
          <ul>
            {/* <li>
              <Link
                to="/admin/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiBarChart2Line className="text-primary" /> Analíticas
              </Link>
            </li> */}
            {/* <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Redes sociales
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/admin/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-black transition-colors"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-black transition-colors"
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-primary-100 hover:text-black transition-colors"
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li> */}
             <li>
              <Link
                to="/admin/Tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte
                técnico
              </Link>
            </li>
            <li>
              <Link
                to="/admin/Doctor"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiHospitalLine className="text-primary" /> Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/admin/Cita"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiMedicineBottleFill className="text-primary" /> Cita Medica
              </Link>
            </li>
            <li>
              <Link
                to="/admin/Patient"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiUserAddFill className="text-primary" /> Paciente
              </Link>
            </li>
            <li>
              <Link
                to="/admin/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <button onClick={()=> signOutUser()}
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
             Cerrar sesión
          </button>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
