const Staffs = () => {
    const staff = [
        { name: 'Kym Althea Castro', role: 'Head Barista', icon: '👩‍🍳' },
        { name: 'Richard Cedric Avila', role: 'Manager', icon: '👨‍🔬'},
        { name: 'Cloe Ann Tagra', role: 'Pastry Chef', icon: '👩‍🍳'},
        { name: 'Vince Palaming', role: 'Barista', icon: '👩‍🍳'},
        { name: 'Amir Bulayok', role: 'Barista', icon: '👩‍🍳'},
        { name: 'Archie Duane Tordecilla', role: 'Barista', icon: '👩‍🍳'},
        { name: 'Princess De Guzman', role: 'Cashier', icon: '👩‍🍳'},
        { name: 'Lovely Mae Beltran', role: 'Marketing Manager', icon: '👨‍💼'}
    ];

    return (
        <section id="about-us" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Welcome to The Comfort Blend, where every cup tells a story. Our dedicated team
                    brings you the finest coffee experience, crafted with passion and served with warmth.
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    {staff.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            <div className="text-6xl mb-4">{member.icon}</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                            <p className="text-cyan-600 font-semibold mb-2">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-4 gap-6 mt-12">
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl font-bold text-cyan-600 mb-2">5+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600">Coffee Varieties</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl font-bold text-cyan-600 mb-2">5000+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-gray-600">Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Staffs;