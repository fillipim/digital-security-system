import * as yup from "yup";
import { IUpdateSystem } from "../interfaces";


export const updateSystemSchema: yup.SchemaOf<IUpdateSystem> = yup.object().shape({
    description: yup.string().max(100).required("Dados obrigatórios não informados."),
    acronym: yup.string().max(8).required("Dados obrigatórios não informados."),
    justificationChange: yup.string().max(500).required("Dados obrigatórios não informados."),
    lastChangeUser: yup.string().required("Dados obrigatórios não informados."),
    status: yup.string().required("Dados obrigatórios não informados."),
    url: yup.string().notRequired(),
    systemEmail: yup.string().email().matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/, "Email invalido").notRequired(),
    updatedAt: yup.date().notRequired()
});