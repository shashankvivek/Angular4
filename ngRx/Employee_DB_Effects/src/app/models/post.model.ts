import { IEmployee, emptyEmp } from "app/models/emp.model";

export interface IPost{
    loading : boolean,
    data : IEmployee,
    error? : string,
    success? :boolean
}

export const emptyPostModel = {
    loading : false,
    data : emptyEmp
}