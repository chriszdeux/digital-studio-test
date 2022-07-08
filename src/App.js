import { useState } from "react";
import { ToDoApp } from "./components";
import { myContext } from "./components/context/context";


function App() {
  const [openFormEdit, setOpenFormEdit] = useState(false)
  const [data, setData] = useState({})
  
  const handleFormEdit = (data) => {
    setData(data)
    setOpenFormEdit(!openFormEdit)
  }
  return (
    <myContext.Provider value={{
      handleFormEdit,
      openFormEdit,
      data,
    }}>
      <ToDoApp />
    </myContext.Provider>
  );
}

export default App;
