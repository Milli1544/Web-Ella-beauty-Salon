import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'men', name: 'Men\'s Cuts' },
    { id: 'women', name: 'Women\'s Styles' },
    { id: 'events', name: 'Special Events' }
  ];

  const images = [
    {
      src: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Modern men's fade",
      category: "men",
      title: "Modern Fade"
    },
    {
      src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Women's blowout style",
      category: "women",
      title: "Professional Blowout"
    },
    {
      src: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Beard grooming",
      category: "men",
      title: "Beard Grooming"
    },
    {
      src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Wedding hairstyle",
      category: "events",
      title: "Wedding Style"
    },
    {
      src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Classic men's cut",
      category: "men",
      title: "Classic Cut"
    },
    {
      src: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Hair braiding",
      category: "women",
      title: "Braided Style"
    },
    {
      src: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Hot towel shave",
      category: "men",
      title: "Hot Towel Shave"
    },
    {
      src: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Hair treatment",
      category: "women",
      title: "Hair Treatment"
    },
    {
      src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Professional styling",
      category: "events",
      title: "Event Styling"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getCurrentImageIndex = () => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex(img => img.src === selectedImage);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(filteredImages[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300">
            Showcasing our finest work and transformations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformations
            </h2>
            <p className="text-lg text-gray-600">
              See the amazing transformations our clients have experienced
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Before & After: Men's Makeover
              </h3>
              <div className="flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Men's transformation"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Before & After: Women's Styling
              </h3>
              <div className="flex justify-center">
                <img
                  src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Women's transformation"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Book your appointment today and let us create your perfect look
          </p>
          <a
            href="/booking"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;