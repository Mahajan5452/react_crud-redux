import StudentList from "../components/StudentList";

const INITIAL_STATE = {
    studentsdata:  [
        { name: 'John Doe', id: 1, phoneNumber: '555-555-5555' },
        { name: 'Jane Doe', id: 2, phoneNumber: '555-555-5556' },
        { name: 'Michael Smith', id: 3, phoneNumber: '555-555-5557' },
        { name: 'Emily Davis', id: 4, phoneNumber: '555-555-5558' },
        { name: 'James Johnson', id: 5, phoneNumber: '555-555-5559' },
        { name: 'Sarah Brown', id: 6, phoneNumber: '555-555-5560' },
        { name: 'David Wilson', id: 7, phoneNumber: '555-555-5561' },
        { name: 'Jessica Lee', id: 8, phoneNumber: '555-555-5562' },
        { name: 'Matthew Taylor', id: 9, phoneNumber: '555-555-5563' },
        { name: 'Olivia Harris', id: 10, phoneNumber: '555-555-5564' }
    ],
   
  };
  
  function dataReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'UPDATE':
        console.log(action.payload);
    return{
          ...state,
            studentsdata: state.studentsdata.map(student => student.id === action.payload.id? action.payload : student)
    }

      case 'DELETE':
    
        return {
        ...state,
          studentsdata: state.studentsdata.filter(student => student.id!== action.id)
        };
         case 'ADDDATA':
          console.log(action.newUser.id)
          return{
              studentsdata: [...state.studentsdata, action.newUser]
             
          }
      default: return state;
    }
  }
  
export default dataReducers;