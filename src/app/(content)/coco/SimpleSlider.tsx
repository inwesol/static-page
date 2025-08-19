"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatar: string;
  rating: number;
}
interface SimpleSliderProps {
  testimonials: Testimonial[];
  slidesToShow: number;
  isNavigation:boolean;
}
export default function SimpleSlider({
  testimonials,
  slidesToShow,
  isNavigation
}: SimpleSliderProps) {
  var settings = {
    dots: true,
    arrows:isNavigation,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </div>
    ));
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="md:px-3">
            <div className="group relative h-[380px]">
              {/* Background with gradient and blur effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-blue-50 to-primary-green-50 rounded-2xl border border-slate-200 backdrop-blur-sm transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-start mb-6">
                  <div className="p-2 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60">
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-500 to-primary-green-500 rounded-full blur-sm opacity-20 group-hover/avatar:opacity-40 transition-opacity duration-300"></div>
                    {/* <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg group-hover/avatar:scale-110 transition-transform duration-300">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-blue-600 text-xs sm:text-sm font-medium">
                      {testimonial.title}
                    </p>
                    {/* <p className="text-slate-500 text-xs">
                      {testimonial.company}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
