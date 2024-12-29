interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}
export default function PageHeader({
  title,
  description,
  image,
}: PageHeaderProps) {
  return (
    <section
      className="relative py-8 px-4 sm:px-8 text-[#F5F5F5] sm:min-h-[60vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#F0A500]/10"></div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {title || "Welcome"}
      </h2>
      <p className="text-center text-xl leading-normal w-2/3">
        {description || "Qualitative service Assured..."}
      </p>
    </section>
  );
}
