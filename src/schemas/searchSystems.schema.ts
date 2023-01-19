import * as yup from "yup";
import { ISearchSystem } from "../interfaces";

export const searchSystemSchema: yup.SchemaOf<ISearchSystem> = yup.object().shape({
    description: yup.string().max(100).notRequired(),
    acronym: yup.string().max(100).notRequired(),
    systemEmail: yup.string().email().max(50).notRequired()
});