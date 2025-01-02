import Image from "next/image";
import { Star, PhoneIncoming } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  specialty: string;
  phone: string;
}

const teams: TeamCardProps[] = [
  {
    image: "/engineer.jpg",
    name: "Favour Muirillo",
    specialty: "Electrical Contractor",
    phone: "+234 234 234 234",
  },
  {
    image: "/engineer.jpg",
    name: "Abbey Sani",
    specialty: "Electrical Engineer",
    phone: "+234 234 234 234",
  },
  {
    image: "/engineer.jpg",
    name: "John Doe",
    specialty: "Electrical Installer",
    phone: "+234 234 234 234",
  },
];
const MemberCard = ({ team }: { team: TeamCardProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <figure className="relative flex flex-col gap-2 rounded my-4">
        <Image
          src={team.image}
          alt="Engineer"
          width={1000}
          height={1000}
          className="object-cover rounded-t-2xl"
        />
        <figcaption className="absolute -bottom-4 bg-[#F0A500] p-2 min-w-[60%] max-w-[75%] rounded-md text-center translate-x-[10%]">
          <h3 className="text-[#111827] font-semibold">{team.name}</h3>
        </figcaption>
      </figure>
      <p className="text-[#4b5563] flex items-center gap-2">
        <Star className="w-5 h-5 text-[#F0A500]" />
        <span>{team.specialty}</span>
      </p>
      <p className="text-[#4b5563] flex items-center gap-2">
        <PhoneIncoming className="w-5 h-5 text-[#F0A500]" />
        <span>{team.phone}</span>
      </p>
    </div>
  );
};
export default function Teams() {
  return (
    <section className="py-8 px-4 sm:px-8">
      <h2 className="text-[#111827] text-4xl font-bold mb-2 text-center">
        Our Team
      </h2>
      <p className="text-center text-[#4b5563]">
        Meet the Great Minds Behind Our Success
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teams.map((member) => {
          return <MemberCard key={member.name} team={member} />;
        })}
      </div>
    </section>
  );
}
