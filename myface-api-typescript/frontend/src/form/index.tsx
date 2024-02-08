import { useState, FormEventHandler, ChangeEventHandler, JSXElementConstructor, ReactElement, ReactNode } from "react";
import { CreateUserRequest } from "../models/api/createUserRequest";
import '../component/component.scss' // importing css file

export function MyForm() {
    const [inputs, setInputs] = useState<CreateUserRequest>({
        name: undefined,
        username: undefined,
        email: undefined,
        coverImageUrl: undefined,
        profileImageUrl: undefined,
    });
    const [message,setMessage] =useState<String|undefined>(undefined)
   
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
      const {name, value} = event.target;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        async function apiUserCreatecall(){
            try{
                const response = await fetch("http://localhost:3001/users/create/",
                {
                 method:'POST',
                headers:{Accept:'application/json','content-type':'application/json'}, 
                body: JSON.stringify(inputs),
                });
                
                if(response.status === 200)
                {
                  setMessage(" User is added Successfully");
               }
                if(response.status === 400){
                const apiData = await response.json();
                setMessage(apiData.errors[0].param)
                //return message;
                }
            }catch(error){
                console.log(`---> Cannot Fecth Data from the API$ `);
                console.log(error);
            }
        }      
   apiUserCreatecall();
   console.log(message)
        // fetch("http://localhost:3001/users/create/", {
        //   method: 'POST',
        //   headers:{
        //     Accept: 'application/json',            
        //     'Content-Type': 'application/json',
        //   },
        // //   body: JSON.stringify(inputs),
        //   body: JSON.stringify({'name':inputs.name, 'username':inputs.username,'email':inputs.email,'coverImageUrl':inputs.coverImageUrl,'profileImageUrl':inputs.profileImageUrl}),
        // })
        //   .then((response) => {
        //     console.log("------------><")
        //     console.log(response)
        //     if (response.status !== 200) {
        //       throw new Error(response.statusText);
        //     }    
        //     // return response.json();
        //   })
        //   .then(() => {
        //     console.log("We'll be in touch soon.");
        //   })
        //   .catch((err) => {
        //     console.log(err.toString());
        //   });
      };
      return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="name" 
          value={inputs.name || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your username:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>          
        <label>Enter your email:
          <input 
            type="text" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>

          <label>Enter your Cover Image Url:
          <input 
            type="text" 
            name="coverImageUrl" 
            value={inputs.coverImageUrl || ""} 
            onChange={handleChange}
          />
          </label>

          <label>Enter your Profile Image Url:
          <input 
            type="text" 
            name="profileImageUrl" 
            value={inputs.profileImageUrl || ""} 
            onChange={handleChange}
          />
          </label>

          <button type="submit" >Submit</button> 
          <p className="formmessage">message: {message}</p>
      </form>
    )
  }