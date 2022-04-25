import React from 'react';
import style from "../AuthDialog.module.scss";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFromS} from "../../../utils/shema/regisV";


interface RegisterI {

}
export const Register:React.FC<RegisterI>=()=>{
  const form=useForm({
      mode:'onChange',
      resolver:yupResolver(RegisterFromS)
  })
  const onSubmit=data=>console.log(data);
    return(
        <>
            <form onSubmit={form.handleSubmit(onSubmit)} className={style.isEmail} >
                <TextField
                    {...form.register("firstName")}
                    className="mt-15 mb-15"
                    fullWidth
                    id="standard-helperText"
                    label="Ім'я і фамілія"
                    defaultValue=""
                    required
                  type="text"
                    error={!!form.formState.errors.firstName?.message}
                    helperText={form.formState.errors.firstName?.message}

                    variant="outlined"
                />

                <TextField
                    {...form.register("passwordFist")}
                    className=" "
                    fullWidth
                    required
                    id="standard-helperText"
                    label="Пароль"
                    defaultValue=""

                    variant="outlined"
                    error={!!form.formState.errors.passwordFist?.message}
                    helperText={form.formState.errors.passwordFist?.message}

                    type="password"
                />
                <TextField
                    {...form.register("passwordSecond")}
                    className="mt-15 mb-15"
                    fullWidth
                    id="standard-helperText"
                    label="Пароль"
                    defaultValue=""
                    required
                    type="password"
                    error={!!form.formState.errors.passwordSecond?.message}
                    helperText={form.formState.errors.passwordSecond?.message}


                    variant="outlined"
                />
                <Button disabled={!form.formState.isValid} fullWidth type="submit" onSubmit={form.handleSubmit(onSubmit)} >
                    Зареєструватись
                </Button>
            </form>

        </>
    )
}