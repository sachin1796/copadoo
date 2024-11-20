import React from 'react';
import image from '../../assets/image.jpg';  

const ProductCard = ({ title, backgroundImage, description }) => (
  <div className="relative overflow-hidden rounded-2xl aspect-square group w-full sm:w-72 md:w-80 lg:w-96 mx-4 flex flex-col justify-between">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundColor: '#000',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    
    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out p-6">
      <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-sm sm:text-lg md:text-sm text-white mb-4 text-center">{description}</p>
      <button className="bg-cyan-400 text-white py-2 px-6 rounded-full hover:bg-cyan-500 transition-colors">Learn More</button>
    </div>
  </div>
);

const ProductSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">Explore DevOps by Product</h2>
      <div className="flex flex-wrap justify-center gap-8 lg:justify-start lg:flex-nowrap">
        <ProductCard 
          title="CI-CD"
          backgroundImage={image}  
          description="Continuous Integration and Continuous Deployment for faster delivery."
        />
        <ProductCard 
          title="Robotic Testing"
          backgroundImage={image}  
          description="Automated testing using robotic frameworks to ensure high quality."
        />
        <ProductCard 
          title="AI Agents"
          backgroundImage={image}  
          description="AI-powered agents for intelligent decision-making and automation."
        />
        <ProductCard 
          title="AI Agents"
          backgroundImage={image} 
          description="AI-powered agents for intelligent decision-making and automation."
        />
      </div>
    </div>
  );
}

export default ProductSection;
