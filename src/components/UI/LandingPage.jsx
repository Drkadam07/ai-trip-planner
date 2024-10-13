import React from "react";

function LandingPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url('src/assets/landingPage.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl text-center font-Exo px-4">
            Start <span className="font-Agbalumo text-[#e11d48]">Trippin</span> on
            <br /> Adventures
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia vitae
          commodi non voluptatum necessitatibus quidem beatae sed veritatis quae
          est, aliquam cum aut, nulla facere sint magnam doloribus eos. Et
          asperiores, molestiae laborum repudiandae dolores veniam consequuntur
          magni mollitia, libero eos dolorem voluptatibus ad! Cum consectetur
          laborum tenetur a aliquid laboriosam perspiciatis veniam pariatur
          impedit quos error, qui eligendi adipisci explicabo corporis voluptatem
          repudiandae quae sit vel animi repellendus delectus deleniti doloribus
          veritatis. Facere odit, explicabo vero rerum optio fuga libero. At est,
          culpa tempora cum consectetur illum perspiciatis porro nemo asperiores
          iusto error earum, excepturi, reiciendis dolorem minima autem.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;