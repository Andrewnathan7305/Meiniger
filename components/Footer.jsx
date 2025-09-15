const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Meinigar Media</h3>
            <p className="text-gray-400 mb-4">The Premier Digital Media Agency</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#eafe74] rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-[#eafe74] rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-[#eafe74] rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">i</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Brand Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#eafe74] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>hello@meinigar.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Meinigar Media. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
