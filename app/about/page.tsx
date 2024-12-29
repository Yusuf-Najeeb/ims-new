import PageHeader from "@/components/pageHeader";
import AboutIMS from "@/components/about/aboutCompany";
import Teams from "@/components/about/teams";
export default function About() {
  return (
    <section>
      <PageHeader
        title={"About Us"}
        image={"/backgd.png"}
        description="We believe that excellence isn't just about the final product; it's about the entire process, from the initial consultation to the completion of the project and beyond."
      />
      <AboutIMS />
      <Teams />
    </section>
  );
}
