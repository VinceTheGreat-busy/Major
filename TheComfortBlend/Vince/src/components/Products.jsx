const Products = () => {
    const products = [
        { name: 'Matcha Latte', price: 'P110', img: '☕' },
        { name: 'Tiramisu', price: 'P80', img: '🥤' },
        { name: 'Milo Milkshake', price: 'P60', img: '🍵' },
        
    ];

    return (
        <section id="products" className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{product.img}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <div className="text-3xl font-bold text-cyan-600">{product.price}</div>
                            <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;