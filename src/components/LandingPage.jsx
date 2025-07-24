import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, Star, ArrowRight, Check } from 'lucide-react';
import P1 from '../assets/p1.png';
import P2 from '../assets/p2.png';
import P3 from '../assets/p3.png';
import P4 from '../assets/p4.png';
import P5 from '../assets/p5.png';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      title: 'Create Profile',
      description: 'Build your detailed profile with photos and preferences',
      icon: <Users className="w-8 h-8" />,
      image: P1,
    },
    {
      title: 'Verify Identity',
      description: 'Complete verification for trusted connections',
      icon: <Shield className="w-8 h-8" />,
      image: P2,
    },
    {
      title: 'Search & Match',
      description: 'Advanced algorithms find your perfect matches',
      icon: <Heart className="w-8 h-8" />,
      image: P3,
    },
    {
      title: 'Connect & Communicate',
      description: 'Secure messaging and video calls',
      icon: <Star className="w-8 h-8" />,
      image: P4,
    },
    {
      title: 'Plan Your Future',
      description: 'Build a beautiful life together',
      icon: <Heart className="w-8 h-8" />,
      image: P5,
    },
  ];

  const testimonials = [
    {
      name: 'Rahul & Priya',
      quote: 'We met through this platform and found our perfect match. The verification process gave us confidence, and now we\'re happily married!',
      location: 'Mumbai, Maharashtra',
      rating: 5,
    },
    {
      name: 'Amit & Sneha',
      quote: 'A simple and secure way to find your soulmate. The cultural matching was exactly what we were looking for in our journey.',
      location: 'Delhi, NCR',
      rating: 5,
    },
    {
      name: 'Vikram & Anita',
      quote: 'Traditional values with modern technology - exactly what we needed. Thank you for bringing us together in this beautiful journey.',
      location: 'Bangalore, Karnataka',
      rating: 5,
    },
  ];

  const features = [
    'Verified Profiles Only',
    'Advanced Privacy Controls',
    'Cultural Compatibility Matching',
    'Family Background Verification',
    'Secure Communication',
    '24/7 Customer Support'
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-red-900 via-red-700 to-amber-600 overflow-hidden" 
      style={{
        backgroundImage: `url('/src/assets/bg2.png')`,
      }}>
      <div className="absolute inset-0">
          <Heart className="absolute top-50 left-40 w-40 h-40 text-green-300 opacity-20 animate-bounce" />
          <Heart className="absolute bottom-20 right-60 w-48 h-48 text-green-300 opacity-20 animate-bounce" />
          <Heart className="absolute top-20 right-10 w-24 h-24 text-green-300 opacity-20 animate-bounce" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex mt-15 justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-yellow-200 animate-slide-up">
              Where Traditions Meet Technology
            </h1>
            
            <p className="text-lg md:text-lg text-yellow-500 mb-8 animate-slide-up delay-300">
              Your perfect life partner is just a click away
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
              <button className="border-2 border-pink-200 text-pink-200 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-300 hover:text-red-900 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Website */}
      <section 
        id="why"
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center mt-3">
          <h2 className="text-5xl font-bold text-red-700 mb-8">
            Why Choose Us?
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-gray-700 mb-12 leading-relaxed">
            We combine sacred cultural values with cutting-edge matchmaking technology to help
            you find your perfect life partner. Our platform ensures verified profiles, secure communication,
            and personalized recommendations that honor your traditions while embracing modern convenience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-green-500"
              >
                <Check className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section 
        id="process"
        className={`py-20 bg-pink-50 transition-all duration-1000 ${
          isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-8">
            Our Sacred Process
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            A carefully crafted journey designed to honor tradition while embracing modern efficiency
          </p>

          <div className="flex flex-wrap justify-center gap-8  mx-auto">
            {processSteps.map((step, index) => (
             <div
  key={index}
  className="group relative w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-green-200 hover:border-yellow-400"
>
 {/* Step Number */}
  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-20">
    {index + 1}
  </div>

  {/* Image Section */}
  <div className="relative h-48 w-full overflow-hidden">
    <img
      src={step.image}
      alt={`Step ${index + 1}`}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* Icon on top right of image */}
    <div className="absolute top-2 right-2 text-green-600 group-hover:text-red-600 transition-colors duration-300 text-xl bg-white rounded-full p-1 shadow-md">
      {step.icon}
    </div>
  </div>

  {/* Text Section */}
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
    <p className="text-sm text-gray-700">{step.description}</p>
  </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
    </div>

            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials"
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-8">
            Love Stories That Inspire
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            Real couples, real stories, real happiness - discover how we've helped thousands find their soulmates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto border-4 border-pink-300 p-10 rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 shadow-xl rounded-2xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-3xl"
              >
                {/* Quote */}
                <div className="text-6xl text-yellow-400 mb-4 opacity-50">"</div>
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Name and Location */}
                <h4 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-green-600 font-medium">{testimonial.location}</p>
                
                {/* Hearts decoration */}
                <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-red-400 fill-current mx-1" />
                  <Heart className="w-4 h-4 text-yellow-400 fill-current mx-1" />
                  <Heart className="w-4 h-4 text-green-400 fill-current mx-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Call to Action */}
<section className="py-20 bg-gradient-to-r from-yellow-400 to-red-700 text-white text-center">
  <div className="container mx-auto px-4">
    <Heart className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
    
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Begin Your Love Story?
    </h2>
    
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Join thousands of happy couples who found their perfect match through our platform
    </p>
    
    <button className="bg-yellow-400 hover:bg-yellow-300 text-red-900 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Start Your Journey Today
      <ArrowRight className="inline-block ml-3 w-6 h-6" />
    </button>

        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;