import { useState } from "react"

export const Form = () => {

const [form,setForm] = useState({
    name:"",
    age:"",
    email:"",
    password:"",
    reEnterPass:"",

})
const [error,setError] = useState(null)
const handleForm = () => {

}
const handleChange= (e) => {
    // setForm(...form,[e.target.name]:e.target.value)

}


    return (
        <form onSubmit={handleForm} className=" form flex flex-column">
            <input onChange={handleChange} value={form.age} name="name" type="text" placeholder="name" />
            <p>{error}</p>
            <input type="number" placeholder="age" value={form.age}name="age" />
            <p>{error}</p>
            <input type="email" placeholder="email" />
              <p>{error}</p>
            <input type="text" placeholder="password" /
            >
                  <p>{error}</p>
            <input type="text" placeholder=" re-enter password" />
            <p>{error}</p>
            <button>Submit</button>
        </form>
    )
}