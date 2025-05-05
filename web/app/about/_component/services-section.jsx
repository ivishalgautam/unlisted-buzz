import { Search, FileText, BarChart3 } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative before:absolute before:bg-gradient-to-r before:from-primary before:w-full before:h-[450px] before:top-0 before:left-0 before:to-slate-800 bg-gray-100">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold text-center mb-12 border-secondary border-2 w-max mx-auto p-3 px-6 rounded-full">
            What We Do
          </h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
            We provide comprehensive services to help you navigate the world of
            unlisted shares with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            icon={<Search className="w-10 h-10 text-slate-700" />}
            title="Detailed Research"
            description="Clear, easy-to-understand analysis of unlisted companies to help you evaluate their growth potential."
          />
          <ServiceCard
            icon={<FileText className="w-10 h-10 text-slate-700" />}
            title="Enquiry Support"
            description="Interested in a specific unlisted company? You can enquire directly through us to know more and understand your options."
          />
          <ServiceCard
            icon={<BarChart3 className="w-10 h-10 text-slate-700" />}
            title="Data-Driven Decisions"
            description="We equip you with the right information so you can act, not guess."
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            Every feature of Unlisted Buzz is built with one goal in mind — to
            simplify access to high-potential unlisted stocks and give investors
            better control over their investment journey.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-5 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-slate-600 text-center">{description}</p>
    </div>
  );
}
