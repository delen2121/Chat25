import React from 'react';
import EditorJS from "@editorjs/editorjs";




export  const Editor:React.FC=()=> {
    React.useEffect(()=>{

        const editor=new EditorJS(
            {
                holder:'editor',
                placeholder:'Введіть що у вас нового'
            });
        return()=>{
            editor.isReady.then(()=>{
                editor.destroy();
            }).catch(e=>console.error('Error editor cleanup',e))
        }
    },[]);



    return (
        <div id="editor"/>
    );
}
