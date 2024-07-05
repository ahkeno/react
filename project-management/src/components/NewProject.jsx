import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({onAdd,onCancel}){
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDes = description.current.value;
        const enteredDate = date.current.value;

        //Validation
        if(enteredDate.trim() === '' || enteredDes.trim()=== '' || enteredTitle.trim() === ''){
            //show Modal
            modal.current.open()
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDes,
            DisplayDate: enteredDate
        })

    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">
            Oops ... looks like you forgot to enter a value.
            </p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button className= "px-6 py-2 rounded-xl bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}>Save</button>
                </li>
            </menu>
           <div>
            <Input type="text"  ref={title} label="Title"></Input>
            <Input  ref={description}label='Description' textarea></Input>
            <Input type="date" ref={date} label='Due Date'></Input>
            </div>
        </div>
        </>
    )
}