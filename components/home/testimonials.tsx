import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface TestimonialProps {
  image: ImportMeta["url"];
  user: string;
  title: string;
  description: string;
}
const testimonials: TestimonialProps[] = [
  {
    image: "/backgd.png",
    user: "Engr. Musa Lawal",
    title: "Electrical Engineer",
    description:
      "I've never had a more seamless experience with any service provider. The electricians at IMS Electricals are not only experts in their field but also incredibly professional and courteous. They quickly identified and fixed the issue in my home, and I couldn't be happier with the results.",
  },
  {
    image: "/backgd.png",
    user: "Arch. Olubunmi O",
    title: "Architect",
    description:
      "The consultation services provided by IMS Electricals were top-notch. They took the time to understand my specific needs and offered practical, affordable solutions that exceeded my expectations. Highly recommended!",
  },
  {
    image: "/backgd.png",
    user: "Mr. Fatiu Mubarak",
    title: "Production Manager",
    description:
      "I reached out to the company for a consultation on upgrading the electrical system in my office. The team was thorough, knowledgeable, and provided clear, actionable advice. Their expertise and attention to detail were evident throughout the entire process.",
  },
  {
    image: "/backgd.png",
    user: "Ms. Linda Marcella",
    title: "Teacher",
    description:
      "From start to finish, my experience with IMS Electricals was fantastic. They were prompt, efficient, and the consultation gave me peace of mind knowing that my electrical system was in good hands. I will definitely be using their services again in the future.",
  },
  {
    image: "/backgd.png",
    user: "Dr. Samuel Luigi",
    title: "Surgeon",
    description:
      "I was impressed with the level of service and professionalism displayed by this company. The consultation helped me understand the best options for my electrical needs, and I felt confident in the recommendations they provided. Truly outstanding service!",
  },
];
export default function Testimonials() {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="py-8 px-4 sm:px-8 bg-[#F5F5F5]">
      <h2 className="text-[#111827] text-3xl sm:text-4xl font-bold text-center mb-8">
        Our Customers Say
      </h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg flex flex-col items-center gap-y-8 gap-x-8"
          >
            <p className="text-gray-600 text-left text-xl sm:text-center sm:text-3xl font-mono italic">
              {testimony.description}
            </p>
            <div className="flex justify-center items-center gap-4 text-left mx-auto my-8">
              <Image
                src={testimony.image}
                alt={`${testimony.user} testifies`}
                width={1000}
                height={1000}
                className="w-[100px] h-[100px] object-cover object-top rounded-full"
              />
              <div>
                <h4 className="text-[1rem] mb-2 text-[#F0A500] italic">
                  {testimony.user}
                </h4>
                <p className="text-sm text-gray-500 -mt-2 italic">
                  {testimony.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
