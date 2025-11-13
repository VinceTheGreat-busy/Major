import logo from '../assets/8.svg';

const Header = ({ scrolled, activeSection, onNavigate }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl w-10 rounded-3xl"><img src={logo}></img></span>
                        <span className={`font-bold text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            The Comfort Blend
                        </span>
                    </div>
                    <div className="flex space-x-8">
                        {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
                                className={`font-medium transition-all duration-200 hover:scale-105 ${scrolled
                                        ? 'text-gray-700 hover:text-cyan-500'
                                        : 'text-white hover:text-cyan-100'
                                    } ${activeSection === item.toLowerCase().replace(' ', '-') ? 'border-b-2 border-current' : ''}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Header;