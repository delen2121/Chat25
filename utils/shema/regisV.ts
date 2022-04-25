import * as yup from "yup";

export const RegisterFromS=yup.object({
    firstName:yup.string().min(5,"Мінамальна довжина поля 5 літер").required("Поле обовязкове"),
    passwordFist:yup.string().min(6,"Мінімальна довжина паролю 6 літер").required('Поле обовязкове'),
    passwordSecond:yup.string().min(6,"Мінімальна довжина паролю 6 літер").required('Поле обовязкове'),

})