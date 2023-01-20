import * as yup from "yup";
import { IUpdateSystem } from "../interfaces";


export const updateSystemSchema: yup.SchemaOf<IUpdateSystem> = yup.object().shape({
    description: yup.string().max(100).required(),
    acronym: yup.string().max(8).required(),
    justificationChange: yup.string().max(500).required(),
    lastChangeUser: yup.string().required(),
    status: yup.string().required(),
    url: yup.string().notRequired(),
    systemEmail: yup.string().notRequired(),
    updatedAt: yup.date().notRequired()
});