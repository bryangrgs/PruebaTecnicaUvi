import React, {useState} from "react";
import './upload.css';
import {MdCloudUpload,MdDelete} from 'react-icons/md';
import { AiFillFileImage} from 'react-icons/ai'
import { Form2 } from "../formularioElements";

function Uploader(){
    const [image,setImage]= useState(null)
    const [fileName, setFileName]= useState("No selecciono una imagen")
    return(
        <main>
        <Form2  onClick={()=> document.querySelector(".formInput").click()}>

                    <input className="formInput" type="file" accept="image/*" hidden onChange={({ target: {files}})=>{
                        files[0] && setFileName(files[0].name)
                        if(files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}/>

                    
        {image ? 
        <img src={image} width={150} height={150} alt={fileName}/> 
        : 
        <> 
        <MdCloudUpload color= '#1475cf' size={60} />
        <p>sube tus archivo</p>
        </>
       
    }
    
    </Form2>
    <section className="uploaded-row">
        <AiFillFileImage color="#1474cf"/>
        <span>
            {fileName}
            <MdDelete 
            onClick={()=>{
                setFileName("No selecciono un archivo")
                setImage(null)
            }}/>
            </span>
    </section>
    </main>
       
        
     

    )
}
export default Uploader;