import Link from "next/link";
import React from "react";

const DoctorCard = ({ doctor }) => {
//   console.log(doctor);
  const { doctorName, specialization, experience, rating, image, _id } = doctor;
  return (
    <Link href={`/doctors/${_id}`}>
      <div className="card border bg-gray-100">
        <figure>
          <img className="h-64 object-cover w-full" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doctorName}</h2>
          <p>{specialization}</p>
          <p>{experience}</p>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
