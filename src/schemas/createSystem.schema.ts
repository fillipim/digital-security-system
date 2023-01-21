import * as yup from "yup";
import { ICreateSystem } from "../interfaces";

export const createSystemSchema: yup.SchemaOf<ICreateSystem> = yup.object().shape({
    description: yup.string().max(100).required("Dados obrigatórios não informados."),
    acronym: yup.string().max(100).required("Dados obrigatórios não informados."),
    systemEmail: yup.string().email().notRequired().nullable().max(50),
    url: yup.string().max(100).notRequired().nullable()
});
