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
  company: string;
  avatar: string;
  rating: number;
}
export default function SimpleSlider() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "CoCo was like a companion in gaining clarity about the next steps in my career journey. Coco encouraged reflection while also providing practical insights. It is very empathetic and supportive.",
      name: "Nagesh M",
      title: "Clinical Psycologist",
      company: "Stanford University",
      avatar:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
    },
    {
      quote:
        "CoCo helped in self-reflection, exploring my own thoughts, rather than offering advice. It’s ideal for those who already have something in mind and want to deepen their thinking.",
      name: "Manaswini",
      title: "Associate Analyst",
      company: "Tech Startup",
      avatar:
        "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
    },
    {
      quote:
        "CoCo asked some really good questions that made me reflect on what I enjoy and what I’m naturally drawn to. It was a helpful experience overall.",
      name: "Sri Varsha",
      title: "Product Design Graduate",
      company: "Johns Hopkins",
      avatar:
        "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
    },
    {
      quote:
        "I am at a career crossroads, and CoCo was a game-changer; it helped me reflect deeply on my goals and motivations. What stood out to me was the personalized questions that sparked introspection. It gave me clarity and confidence I didn’t know I had.",
      name: "Tarun P",
      title: "Data Scientist",
      company: "Marketing Professional",
      avatar:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
    },
    {
      quote:
        "CoCo helped me reflect on my strengths and past experiences in a clear and supportive manner. The thoughtful questions encouraged me to dig deeper into my goals and what I truly want from my career. After our conversation, I felt seen, understood, and more confident about the path ahead.",
      name: "Viraja M",
      title: "Graduate Student",
      company: "MIT",
      avatar:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
    },
    // {
    //   quote:
    //     "CoCo's ability to help me reflect on my goals and values has been transformative. It guided me through a difficult period and helped me emerge stronger and more self-aware.",
    //   name: "James Wilson",
    //   title: "Young Professional",
    //   company: "Consulting Firm",
    //   avatar:
    //     "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   rating: 5,
    // },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
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
    <div className="slider-container px-4 sm:px-0">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
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
