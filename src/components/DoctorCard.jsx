import React from "react";

const DoctorCard = ({doctor}) => {
    console.log(doctor);
  return (
    <div>
      <div className="card  shadow-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
