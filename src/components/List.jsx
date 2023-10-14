import react from "react";
import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";

function List() {
  const [editing, setEditing] = useState(false);
  const [medicalshedules, setMedicalShedules] = useState([]);
  const [dayoftheweek, setDayOfTheWeek] = useState("");
  const [week, setWeek] = useState("");
  const [consultationhours, setConsultationHours] = useState("");

  useEffect(() => {
    getMedicalShedule();
  }, []);
  async function getMedicalShedule() {
    try {
      const { data, error } = await supabase
        .from("Medical_Shedule")
        .select("*");
      //console.log(medicalshedules.id)
      if (error) throw error;
      if (data != null) {
        setMedicalShedules(data);
      }
      //console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function createMedicalShedules() {
    try {
      const { error } = await supabase
        .from("Medical_Shedule")
        .insert({
          day_of_the_week: dayoftheweek,
          week: week,
          consultation_hours: consultationhours,
        })

        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateMedicalShedule(medicalsheduleid) {
    try {
      const { error } = await supabase
        .from("Medical_Shedule")
        .update({
          day_of_the_week: dayoftheweek,
          week: week,
          consultation_hours: consultationhours,
        })
        .eq("id", medicalsheduleid);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteMedicalShedule(medicalsheduleid) {
    try {
      const { error } = await supabase
        .from("Medical_Shedule")
        .delete()
        .eq("id", medicalsheduleid);
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(medicalshedules);

  return (
    <>
      <form action="" className="py-6">
        <h2 className="text-base font-semibold leading-7 text-white-900">
          Horario de consulta
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-white-900"
            >
              Dia de la semana
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="dayoftheweek"
                onChange={(e) => setDayOfTheWeek(e.target.value)}
                className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-white-900"
            >
              Semana
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="week"
                onChange={(e) => setWeek(e.target.value)}
                className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-white-900"
            >
              Horario de consulta
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="consultationhours"
                onChange={(e) => setConsultationHours(e.target.value)}
                className="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
              />
            </div>
            <div className="mt-7 flex items-center justify-end gap-x-7">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-white-900"
              >
                Cancel
              </button>
              <button
                onClick={() => createMedicalShedules()}
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>

      {editing == false ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Horario Medico
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Browse a list of Flowbite products designed to help you work and
                play, stay organized, get answers, keep in touch, grow your
                business, and more.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Dia de la semana
                </th>
                <th scope="col" className="px-6 py-3">
                  Semana
                </th>
                <th scope="col" className="px-6 py-3">
                  Horario de Consula
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {medicalshedules.map((medicalshedule) => (
                <tr
                  key={medicalshedule.id}
                  medicalshedule={medicalshedule}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {medicalshedule.day_of_the_week}
                  </th>
                  <td className="px-6 py-4">{medicalshedule.week}</td>
                  <td className="px-6 py-4">
                    {medicalshedule.consultation_hours}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setEditing(true)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteMedicalShedule(medicalshedule.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Horario Medico
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Dia de la semana
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Semana
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Horario de Consula
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">guardar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {medicalshedules.map((medicalshedule) => (
                  <tr
                    medicalshedule={medicalshedule}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <input
                        defaultValue={medicalshedule.day_of_the_week}
                        type="text"
                        id="dayoftheweek"
                        onChange={(e) => setDayOfTheWeek(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                      />
                    </th>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={medicalshedule.week}
                        type="text"
                        id="week"
                        onChange={(e) => setWeek(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={medicalshedule.consultation_hours}
                        type="text"
                        id="consultationhours"
                        onChange={(e) => setConsultationHours(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => updateMedicalShedule(medicalshedule.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Guardar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={() => setEditing(false)}>Volver</button>
        </>
      )}
    </>
  );
}

export default List;
