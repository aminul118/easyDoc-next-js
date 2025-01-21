import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-292px)] container mx-auto px-6">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
