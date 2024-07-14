'use client'
import { useRef, useState } from 'react'
import Image from 'next/image';
import classes from './image-picker.module.css'
export default function ImagePicker({ label, name }){
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState('');
    function handlePickClick(){
        imageInput.current.click()
    }
    function handleImageChange(event){
        debugger;
        const file = event.target.files[0]
        if(!file){
            // user not pick a file
            setPickedImage(null)
            return ;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPickedImage(fileReader.result)
        }
      
        fileReader.readAsDataURL(file);

    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
        <div className={classes.preview}>
            {!pickedImage && <p>No Image pick yet</p>}
            {pickedImage && <Image src={pickedImage} fill alt='your image uploaded'></Image>}
        </div>
        <div className={classes.controls}>
             <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            />
            <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
            >
            Pick an Image
            </button>
        </div>
        </div>
    )
}