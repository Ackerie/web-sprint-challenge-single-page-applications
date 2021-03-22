import react, { useState } from 'react'
import yup from 'yup'



const  initialForm = {
  name:'',
  email:'',
  size:'',
  sauce:'',
  original:'',
  bbq:'',
  pepperoni:false,
  tomatos:false,

}

const initialFormErrors = {
  name:'',
  email:''
}

export default function Form() {
    const pizza = yup.object().shape({
        name: yup.string().min(3, 'three or more characters needed'),
        email: yup.string().notRequired(),
        size: yup.string().required('Please Choose Size'),
        pepperoni: yup.boolean(),
        tomatos: yup.boolean()
       })


       const [formInfo, setFormInfo] = useState(initialForm)
       const [formErrors, setFormErrors] = useState(initialFormErrors)
       const [order, setOrder] = useState()


  
  

  axios.post("https://reqres.in/api/", newOrder)
  .then((resposnce) => {
    setFormInfo(initialForm)
    setOrder([...formInfo,resposnce.data])
    console.log("success", resposnce.data);
  })
  .catch((err) => {
    console.log("error", err);
  });

  const onSubmit = (e)=> {
    e.preventDefault();
   const newFormInfo={
    name: formInfo.name,
    email: formInfo.Email,
    
    }
 
}
const onChange = e => {
  const valueToUse = e.target['type'] === 'checkbox' ? !order['extraCheese'] : e.target['value']
  setOrderErrors(e.target['name'],valueToUse)
  setOrder({...order,[e.target['name']]:valueToUse})
}

  const setOrderErrors = (name, value) => {
    yup.reach(pizza,name).validate(value)
    .then( () => setFormErrors({...formErrors, [name]: ''}))
    .catch( err => setFormErrors({...formErrors, [name]: err.errors[0]}));
  }

  return(
  <form onSumbit = {onSubmit}>
    <div className = '\Form'>
    <input
           onChange={onChange}
            placeholder="Name"
            id="nameInput"
            name="name"
            type="text"
            value= {formInfo.name}
          />
          <br />
          
          <input
            onChange={onChange}
            placeholder="Email"
            id="emailInput"
            name="Email"
            type="Email"
            value = {formInfo.email}
          />
          <br />

          <label> TOPPINGS
          
          <input
            type="checkbox"
             name="extraCheese"
             checked= {extraCheese}
             onChange= {onChange}
    />
          
          <input 
          type="checkbox"
           name="pepperoni"
           checked= {pepperoni}
           onChange= {onChange}
     />
           <br  />

           <input 
          type="checkbox"
           name="pineapple"
           checked= {pineapple}
           onChange= {onChange}
     />

<input 
          type="checkbox"
           name="ham"
           checked= {ham}
           onChange= {onChange}
     />
     </label>
           
  
          <button type="submit">submit</button>
  
</div>
  </form>
 )   }