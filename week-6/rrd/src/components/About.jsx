export function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:flex md:gap-6 lg:items-center">
          {/* Image section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text content section */}
          <div className="md:w-7/12 lg:w-6/12 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-4xl text-gray-900 font-bold mb-4">
              React development is carried out by passionate developers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur!
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
