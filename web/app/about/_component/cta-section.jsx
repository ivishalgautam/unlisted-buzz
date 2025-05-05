import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Explore Unlisted Opportunities?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Join Unlisted Buzz today and gain access to our research, insights,
          and expertise in the unlisted shares market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
