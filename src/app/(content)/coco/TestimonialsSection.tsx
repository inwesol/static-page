import { Heart } from "lucide-react";
import SimpleSlider from "./SimpleSlider";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
}
const testimonials: Testimonial[] = [
  {
    quote:
      "CoCo was like a companion in gaining clarity about the next steps in my career journey. Coco encouraged reflection while also providing practical insights. It is very empathetic and supportive.",
    name: "Nagesh M",
    title: "Psycologist",
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
    title: "Data Science Associate",
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
  {
    quote:
      "CoCo helped me in uncovering my strengths, which are related with the profession I aspire to. CoCo broke down big steps into manageable actions. I felt truly seen and validated.",
    name: "Koyena D",
    title: "Counselling Psychologist",
    company: "Consulting Firm",
    avatar:
      "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <div className="flex flex-col gap-3 items-center mb-10">
        {/* <div className="bg-gradient-to-r from-primary-green-600 to-primary-blue-600 p-3 rounded-full">
          <Heart className="size-5 text-white" />
        </div> */}
        {/* animated label */}
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[2.5px] focus:outline-none select-none">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00B24B_0%,#3FA1D8_50%,#00B24B_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium backdrop-blur-3xl gap-2 text-slate-900">
            <Heart className="size-4" /> Voices of CoCo
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-green-600 text-center">
          How CoCo&apos;s Making a Difference?
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium text-center">
          Real Stories. Real Impact
        </p>
      </div>
      <SimpleSlider testimonials={testimonials} slidesToShow={2} isNavigation={true}/>
    </>
  );
}
