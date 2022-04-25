import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const LoginFormS=yup.object().shape({
    email:yup.string().email().required("Пошта обовязкова"),
    password:yup.string().min(6,"Мінімальна довжина пароля 6 літер").required("Пароль обовязковий"),

})