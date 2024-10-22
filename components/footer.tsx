import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
    return (
        <footer className="w-full text-white  bg-gradient-to-r from-blue-200 to-blue-500 p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="https://portfolio-az.netlify.app/"  target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Home</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/azamat101/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <LinkedInLogoIcon className="w-[30px] h-[30px]" />
                    </a>
                    <a href="https://github.com/Azamat-Shogen" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <GitHubLogoIcon className="w-[30px] h-[30px]" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-4 border-t border-gray-500 pt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Automation Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
};
