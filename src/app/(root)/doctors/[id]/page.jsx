import Heading from "@/components/common/Heading";

const DoctorDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://easydoc-three.vercel.app/doctors/${id}`);
  const data = await res.json();
//   console.log(data);
  const { doctorName, specialization, phone, location, image, details } = data;

  return (
    <>
      <Heading heading={`Details about ${doctorName}`} />
      <div className="flex justify-center items-center py-8 bg-gray-100">
        <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden border">
          <img
            src={image}
            alt={`Dr. ${doctorName}`}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {doctorName}
            </h2>
            <p className="text-lg italic text-gray-600 mb-4">
              {specialization}
            </p>
            <div className="mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {phone}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">Location:</span>{" "}
                {location}
              </p>
            </div>
            <p className="text-sm text-gray-700">{details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
