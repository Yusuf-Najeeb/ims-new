import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Projects {
  image: ImportMeta["url"];
  alt: string;
}

const sliderSettings = {
  autoplay: true,
  rtl: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const projects: Projects[] = [
  {
    image: "/backgd.png",
    alt: "A recent project",
  },
  {
    image: "/backgd.png",
    alt: "A recent project",
  },
  {
    image: "/backgd.png",
    alt: "A recent project",
  },
  {
    image: "/backgd.png",
    alt: "A recent project",
  },
  {
    image: "/backgd.png",
    alt: "A recent project",
  },
];

export default function Projects() {
  return (
    <section className="py-8 px-4 sm:px-8">
      <h2 className="text-[#111827] text-4xl font-bold mb-8 text-center">
        Projects
      </h2>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="">
            <div className="text-center flex flex-col items-center gap-y-2 w-full h-[45vh] sm:h-[90vh]">
              <Image
                src={project.image}
                alt={project.alt}
                width={1000}
                height={1000}
                className="sm:w-[95%] h-full rounded drop-shadow-md object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
