import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createHouse } from "../../redux/actions";
import style from './CreateHouse.module.css';

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
  const history = useHistory()

  const inputHandler = (event) => {
    setInput({...input,[event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createHouse(input));
    setInput({
      name:"",
      region:"",
      words:"",
    })
    history.push('/')
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submitHandler}>
        <label>Name: </label>
        <input name="name" value={input.name} onChange={inputHandler}/>

        <label>Region: </label>
        <input name="region" value={input.region} onChange={inputHandler}/>

        <label>Words: </label>
        <input name="words" value={input.words} onChange={inputHandler}/>

        <button type="submit">Create</button>

      </form>
    </div>
  );
};

export default CreateHouse;
