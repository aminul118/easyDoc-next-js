import Heading from "@/components/common/Heading";
import DoctorCard from "@/components/DoctorCard";

const Doctors = async () => {
  const res = await fetch(`https://easydoc-three.vercel.app/doctors`);
  const doctors = await res.json();
  // console.log(doctors);

  return (
    <div>
      <Heading heading="All Doctors" />
      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-12 2xl:mb-24">
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
