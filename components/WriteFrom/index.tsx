import React from 'react';
import Input from "@mui/material/TextField";
import styles from'./WriteForm.module.scss';
import dynamic from "next/dynamic";
import {Button} from "@material-ui/core";
import TextsmsIcon from '@mui/icons-material/Textsms';



const Editor=dynamic(()=>import('../Editor/Editor').then(m=>m.Editor), {ssr:false})

interface WriteFromProps{
    title?:string;
}

const WriteFrom:React.FC<WriteFromProps>=({title})=> {

    return (
        <div  className={styles.bgEditor}>
            <Input classes={{root:styles.titleField}} placeholder="Заголовок" defaultValue={title} />
            <div className={styles.editor}>
                <Editor/>
            </div>
            <Button style={{ height: 42,backgroundColor:"deepskyblue" }} variant="contained"   >

                Відправити
            </Button>
        </div>
    );
}

export default WriteFrom;
