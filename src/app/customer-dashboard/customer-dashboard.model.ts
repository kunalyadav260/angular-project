// export class cust_details{
//     // Id : number = 0;
//     // FirstName : string = "";
//     // LastName : string = "";
//     // Email : string = "";
//     // Mobile : string = "";
//     // Salary : string = "";
//     cust_id:number=0;
//     cust_name:string="";
//     cust_phone:string="";
//     cust_email:string="";
//     cust_add:string="";

import { DeclarationListEmitMode } from "@angular/compiler";

// }
export interface Icust_details{
    // Id : number = 0;
    // FirstName : string = "";
    // LastName : string = "";
    // Email : string = "";
    // Mobile : string = "";
    // Salary : string = "";
    cust_id:number;
    cust_name:string;
    cust_phone:string;
    cust_email:string;
    cust_add:string;
    // cust_check_in:Date;
    // cust_check_out:Date;
    payment_info:string;
}