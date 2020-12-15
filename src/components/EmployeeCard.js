import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { 
    return (
        <div className='card'>
            <img
                style={{ maxWidth: "60px"}}
                src={image}
                alt="employee"
            />
            <p className="employeetext">{name}</p>
            <p className="department">{dept}</p>
            <p className="emailtext">{email}</p>
            <p className="phonedigits">{phone}</p>
        </div>
    )
}

export default EmployeeCard;