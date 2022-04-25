import React from 'react';
import {DialogActions, DialogContent, Typography} from "@material-ui/core";
import style from "../AuthDialog.module.scss";
import {Button} from "@mui/material";
import Image from "next/image";
import logo from "../../Header/icons/logo.png";
import email from "../../Header/icons/email.png";


interface MainI {
setMail:()=>void;
    handleCloseAuth:()=>void;
}
export const Main:React.FC<MainI>=({setMail,handleCloseAuth})=>{
    return(
        <>

            <DialogContent className={style.content}>
                <Typography className="mb-10">Виберіть свосіб входу в соціальну мережу:</Typography>
                <Button variant='contained' fullWidth className='mb-10'>
                    <Image src={logo} width={20} height={20}/> <div className="ml-10">Google</div>
                </Button>
                <Button onClick={setMail}variant='contained' fullWidth>
                    <Image src={email} width={22} height={22} className=""/> <div className="ml-10">Через пошту</div>
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAuth} fullWidth>Відміна</Button>
            </DialogActions>
        </>
    )
}