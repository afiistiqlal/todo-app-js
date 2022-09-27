import Tambah from "./components/ButtonTambah";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";
// import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [activity, setActivity] = useState([<EmptyState />]);
  useEffect(() => {
    if (Object.keys(activity).length === 0) {
      setActivity();
    }
  }, [activity]);
  const addActivity = () => {
    // setActivity();
    console.log("click");
  };

  return (
    <div className="font-PoppinsBold bg-neutral-100 min-h-screen">
      <Header />
      <div className="md:w-4/6 mx-auto">
        <div className="relative">
          <div className="absolute right-0 top-0 px-8">
            <Tambah data-cy="activity-add-button" addActivity={addActivity} />
          </div>
          <h1 className="text-4xl my-8 mx-6">Activity</h1>
        </div>
        <div className="flex flex-row flex-wrap flex-none p-4">
          {activity}
          {/* <Card /> */}
   Z     </div>
      </div>
    </div>
  );
}

export default App;
