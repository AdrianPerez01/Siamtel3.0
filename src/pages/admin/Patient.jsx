import React from "react";
import { supabase } from "/src/supabase/supabase.js";
import { useState } from "react";

function Patient() {
  
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName ] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
const { data: { user } } = await supabase.auth.getUser()
      console.log(user);
      /*const result = await supabase.from("patient").insert(
        {
          first_name: firstName,
          second_name: lastname
        });
      console.log(result);*/
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
          <h2 className="text-base font-semibold leading-7 text-white-900">
            Ingresar un Paciente
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="first-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Primer Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  onChange={(e)=>setFirstName(e.target.value)}
                  autocomplete="given-name"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="last-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Segundo Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastname"
                  onChange={(e)=>setLastName(e.target.value)}
                  autocomplete="family-name"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="first-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Primer Apellido
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="last-name"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Segundo Apellido
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Codigo de Carnet
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>
          </div>


      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Patient;
