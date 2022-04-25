import React from 'react';
import {Button} from "@mui/material";
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import Image from "next/image";
import logo from "../Header/icons/logo.png";
import email from "../Header/icons/email.png";
import style from "./AuthDialog.module.scss";
import LoginIcon from '@mui/icons-material/Login';
import {Main} from "./formThings/Main";
import {Login} from "./formThings/Login";
import {Register} from "./formThings/Register";


interface IauthDialog {
    handleClickOpenAuth: () => void;
    handleCloseAuth: () => void;
    openAuth: boolean;
}

export const AuthDialog: React.FC<IauthDialog> = ({handleClickOpenAuth, handleCloseAuth, openAuth}) => {
   const [mail,setMail]=React.useState<'mail'|'email'|'register'>('mail');
    return (
        <div>
            <Button variant="text" onClick={handleClickOpenAuth}>
                <LoginIcon className="mr-5"/>   Вхід
            </Button>
            <Dialog open={openAuth} onClose={handleCloseAuth} maxWidth='sm' fullWidth>
                <DialogTitle>
                    {mail==='mail'?"Вхід в соціальну мережу":<div className="d-flex justify-between">
                        {mail==='email'&&  "Авторизація за допомогою пошти"}
                        {mail==='register'&&  <>Реєстрація <div className={style.bak2} onClick={()=>{setMail('email')}}>
                            Авторизуватись
                            </div></>}
                    {mail==='email'&& <div className={style.bak2} onClick={()=>{setMail('register')}}>
                        Реєстрація
                    </div>}

                    <div className={style.bak} onClick={()=>{setMail('mail')}}>
                        Повернутись назад
                    </div>

                </div>}

                </DialogTitle>

                {mail==='mail'&& <Main setMail={()=>setMail('email')} handleCloseAuth={handleClickOpenAuth}/>}


                {mail==='email'&&<Login/>}

                {mail==='register'&&<Register/>}
            </Dialog>
        </div>
    );
}