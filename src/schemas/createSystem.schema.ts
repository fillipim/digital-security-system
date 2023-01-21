import * as yup from "yup";
import { ICreateSystem } from "../interfaces";

export const createSystemSchema: yup.SchemaOf<ICreateSystem> = yup.object().shape({
    description: yup.string().max(100).required(),
    acronym: yup.string().max(100).required(),
    systemEmail: yup.string().email().max(50).notRequired()
});

export const validateEmail = yup.string().email().matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i)