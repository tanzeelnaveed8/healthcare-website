import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative Border */}
        <div className="border-t-2 border-gray-700 mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-lg">
              <strong>Phone:</strong> 0800 844 5257
            </p>
            <p className="text-lg">
              <strong>Email:</strong> info@optimisehcg.co.uk
            </p>
          </div>

          {/* Social Links with Stylish Icons */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://facebook.com/optimisehcg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="https://twitter.com/optimisehcg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter className="text-4xl" />
            </a>
            <a
              href="https://instagram.com/optimisehcg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition duration-300"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>

          {/* Legal Information */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-semibold mb-4">Legal</h3>
            <p className="text-sm text-gray-400">
              © 2021 Optimise Healthcare Group <br />
              Company Number: 11651981 <br />
              All Rights Reserved
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-12 border-t-2 border-gray-700"></div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-8 text-gray-500">
          <p>Designed with ❤️ by Optimise Healthcare Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
