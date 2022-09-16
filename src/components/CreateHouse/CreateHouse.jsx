import React from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    name:"",
    region:"",
    words:"",
  })

  const inputHandler = (event) => {
    setInput({...input,[event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createHouse(input));
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <input name="name" onChange={inputHandler}/>

        <label>Region: </label>
        <input name="region" onChange={inputHandler}/>

        <label>Words: </label>
        <input name="words" onChange={inputHandler}/>

        <button type="submit">Create</button>

      </form>
    </div>
  );
};

export default CreateHouse;
