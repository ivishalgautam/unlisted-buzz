import Image from "next/image";

export function FounderSection() {
  return (
    <section className="py-20 pb-10 px-4 md:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 border-secondary border-2 w-max mx-auto p-3 px-6 rounded-full">
          Our Founder
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-lg">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src={"/founder.jpeg"}
              width={300}
              height={300}
              alt="Mrs. Ashima Nayyar"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Mrs. Ashima Nayyar</h3>
            <p className="text-slate-600 mb-6 text-lg">
              The founder of Unlisted Buzz brings with her a deep background in
              finance. With professional experience at leading financial
              institutions such as Citibank and Standard Chartered Bank, she has
              spent years understanding how financial systems work — and how
              investors can benefit from emerging opportunities.
            </p>
            <p className="text-slate-600 text-lg">
              Her vision for Unlisted Buzz came from a simple idea: make
              unlisted investing more accessible, transparent, and backed by
              solid research. With her guidance, the platform has been designed
              to support investors who want to step into the unlisted space with
              confidence and clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
