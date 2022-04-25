import React from 'react';
import style from "../AuthDialog.module.scss";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormS} from "../../../utils/shema/loginV";

interface LoginI {

}
export const Login:React.FC<LoginI>=()=>{
   const form = useForm({
        mode:'onSubmit',
       resolver:yupResolver(LoginFormS)

   })
    const onSubmit=data=>console.log(data);
    return(

            <form onSubmit={form.handleSubmit(onSubmit)} className={style.isEmail} >
                <TextField
                    {...form.register("email")}
                    className=" "
                    fullWidth
                    required
                    id="standard-helperText"
                    label="Пошта"
                    defaultValue=""
                    error={!!form.formState.errors.email?.message}
                    helperText={form.formState.errors.email?.message}
                    variant="outlined"
                    type="email"

                />
                <TextField
                    {...form.register("password")}
                    className="mt-15 mb-15"
                    fullWidth
                    id="standard-helperText"
                    label="Пароль"
                    defaultValue=""
                    required
                    type="password"
                    error={!!form.formState.errors.password?.message}
                    helperText={form.formState.errors.password?.message}
                    variant="outlined"
                />
                <Button type="submit" onSubmit={form.handleSubmit(onSubmit)} fullWidth>
                    Вхід
                </Button>
            </form>


    )
}