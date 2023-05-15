import Input from "./Input"
import Button from "./Button"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseStyle, chooseAge } from "../redux/slices/RootSlice";


interface WhiskeyFormProps {
    id?: string[]
  }


const Whiskeyform = (props:WhiskeyFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id);
        console.log(data)
        if (props.id && props.id.length > 0) {
          server_calls.update(props.id[0], data)
          //console.log("test")
          console.log(`Updated: ${ data.name} ${ props.id }`)
          setTimeout(() => {window.location.reload()}, 500);
          event.target.reset()
        } else {
          // Use dispatch to update our state in our store
          dispatch(chooseName(data.name));
          dispatch(chooseStyle(data.style));
          dispatch(chooseAge(data.age));
    
          server_calls.create(store.getState())
          setTimeout( () => {window.location.reload()}, 500);
        }
        
      }

    return (

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Whiskey Name</label>
              <Input {...register('name')}  name='name' placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="style">Style</label>
              <Input {...register('style')}  name='style' placeholder="Style"/>
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <Input {...register('age')}  name='age' placeholder="Age"/>
            </div>
            <div className="flex p-1">
              <Button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                >
                  Submit
              </Button>
            </div>
          </form>
        </div>
      )
    } 

export default Whiskeyform