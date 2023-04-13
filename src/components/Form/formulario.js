import React, {useState} from "react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  Input  from './Input';
import './upload/upload.css';
import {Form, Main,Body,Label,
    ContenedorTerminos,ContenedorBotonCentrado
    ,Boton,MensajeError,MensajeExito}  from './formularioElements';


import './upload/upload.css';
import {MdCloudUpload,MdDelete} from 'react-icons/md';
import { AiFillFileImage} from 'react-icons/ai'
import { Form2 } from "./formularioElements";



 const Formulario = ()=>{

    const [image,setImage]= useState(null)
    const [fileName, setFileName]= useState("No selecciono una imagen")
    
    
    const [usuario, cambiarUsuario]= useState({campo: "" ,  valido: null});
    const [correo, cambiarCorreo]= useState({campo: "" ,  valido: null});
    const [telefono, cambiarTelefono]= useState({campo: "" ,  valido: null});
    const[terminos,cambiarTerminos]=useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [selecionado,cambiarSeleccionado]=useState(false);
    const seleccion ={
        sinplan:"Seleccione un plan",
        plan1:"plan1",
        plan2:"plan2",
        plan3:"plan3"
    }
    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}
   
    const onChangeTerminos= (e)=>{
        cambiarTerminos(e.target.checked);
    }
    const onSubmit= (e)=>{
        e.preventDefault();
        if(
        usuario.valido === 'true' && 
        correo.valido === 'true' &&
        telefono.valido === 'true' &&
        terminos                   &&
        image                      &&
        selecionado 
        ){
            
            cambiarFormularioValido(true);
            cambiarUsuario({campo:'',valido:null});
            cambiarTelefono({campo:'',valido:null});
            cambiarCorreo({campo:'',valido:null});

        }else{
            cambiarFormularioValido(false);
        }
    }
    return(
        <Body id="Formulario">
             <Main>
            <Form action="" onSubmit={onSubmit} >
               <Input
               type="text"
               label="Usuario"
               placeholder="Ingrese su Nombre"
               name="usuario"
               leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo (_)"
               expresionRegular={expresiones.usuario}
               estado={usuario}
               cambiarEstado={cambiarUsuario}
               />
               <Input
               type="email"
               label="Correo"
               placeholder="Ingrese su Correo"
               name="correo"
               leyendaError="ingrese un correo valido"
               expresionRegular={expresiones.correo}
               estado={correo}
               cambiarEstado={cambiarCorreo}
               />
                <Input
               type="text"
               label="Telefono"
               placeholder="Ingrese su número de telefono"
               name="telefono"
               leyendaError="el telefono solo puede contener entre 7 a 14 números"
               expresionRegular={expresiones.telefono}
               estado={telefono}
               cambiarEstado={cambiarTelefono}
               />
               
               <select className="select" name="select" onSelect ={selecionado} onChange={cambiarSeleccionado}>
               <option value="value0" >{seleccion.sinplan}</option>
                <option value="value1" >{seleccion.plan1}</option>
             <option value="value2" >{seleccion.plan2}</option>
             <option value="value3" >{seleccion.plan3}</option>
</select>
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
            <MdDelete  className="deleteIcon"
            onClick={()=>{
                setFileName("No selecciono un archivo")
                setImage(null)
            }}/>
            </span>
    </section>
    </main>
               
                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" 
                        name="terminos" 
                        id="terminos" 
                        checked={terminos}
                        onChange={onChangeTerminos}/>
                        Acepto los terminos y condiciones
                    </Label>
                </ContenedorTerminos>
                <div>
                   {formularioValido === false && <MensajeError>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b>Por favor rellene el formulario correctamente. 
                        </MensajeError>}
                </div>
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
{            formularioValido === true &&    <MensajeExito>Formulario enviado exitosamente!!</MensajeExito>
}                </ContenedorBotonCentrado>
                
            </Form>
        </Main>
        </Body>
       
    );
}
export default Formulario;