export interface IBooking_detail{
    booking_id:number;
    cust_name:string;
    cust_phone:string;
    cust_email:string;
    cust_add:string;
    room_id:number;
    hotel_id:number;
    cust_check_in:Date;
    cust_check_out:Date;
    payment_info:string;
}