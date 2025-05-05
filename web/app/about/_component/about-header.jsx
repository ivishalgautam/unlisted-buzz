import Image from "next/image";

export function AboutHeader() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <figure className="">
              <Image
                width={500}
                height={500}
                alt="about us"
                src={"/about.jpg"}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </figure>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Welcome to Unlisted Buzz
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Your reliable source for discovering, analyzing, and dealing in
              unlisted shares.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              In today's fast-changing financial world, investors are constantly
              looking for opportunities beyond traditional stock markets. At
              Unlisted Buzz, we make it easier for you to explore the world of
              unlisted companies with clarity and confidence. Whether you're
              looking to invest early in potential leaders or exit existing
              holdings, we help you make informed choices backed by reliable
              insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
