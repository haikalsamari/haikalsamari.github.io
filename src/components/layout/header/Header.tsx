import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-200">
      <header className="max-w-5xl mx-auto flex justify-between p-4">   
        {/* <div className="font-semibold text-blue-600 hover:text-gray-200 cursor-pointer text-lg">
          haikalsamari
        </div> */}

        <nav className="flex gap-6">
          <h3 className="font-bold text-blue-600 text-lg">I don't know what to write here<span className="text-black">.</span></h3>
          {/* <a
            href="https://github.com/wsomad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-2xl hover:text-gray-300 cursor-pointer hover:scale-110 transition-transform duration-300"/>
          </a>

          <a
            href="https://www.linkedin.com/in/haikalsamari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl hover:text-gray-200 cursor-pointer hover:scale-110 transition-transform duration-300"/>
          </a>     */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
