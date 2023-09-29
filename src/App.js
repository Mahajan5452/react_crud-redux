import { useDispatch, useSelector } from "react-redux";
import StudentList from "./components/StudentList";
import { useEffect, useState } from "react";
import AddData from "./components/addData";
import Display from "./components/Display";



function App() {
  const { studentsdata} = useSelector((state) => state.studentState);
  // const {studentsdata}=useSelector((state) => state.studentsState);

  // useEffect(()=>{
  //  <StudentList></StudentList>
  // },[studentsdata])
  const dispatch = useDispatch();

  const [buttonValue, setButtonValue] = useState(false);
  
  return (
      <>
      <Display/>
      {/* <StudentList></StudentList> */}
   </>
  );
}

export default App;
