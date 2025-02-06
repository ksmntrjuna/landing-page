import logoBg from "../assets/logo.png";

function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="p-6">
        <div className="container mx-auto text-center p-6 border-2 border-white rounded-2xl max-w-7xl relative">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-30"
            style={{ backgroundImage: `url(${logoBg})` }}
          ></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-black">
            About Us
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-black mb-6 text-justify mx-auto max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            neque urna, ornare sit amet aliquam cursus, dignissim et augue.
            Aenean iaculis purus vitae nunc fringilla, eu fermentum erat
            condimentum.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-black text-justify mx-auto max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            neque urna, ornare sit amet aliquam cursus, dignissim et augue.
            Aenean iaculis purus vitae nunc fringilla, eu fermentum erat
            condimentum. Donec ut justo justo. Vestibulum tempor vel massa
            ultrices suscipit. Mauris vestibulum cursus erat, blandit dignissim
            nunc fermentum a. Suspendisse varius, massa sed semper auctor,
            turpis justo lacinia diam, interdum maximus risus mi bibendum
            turpis. Aliquam in sem at enim hendrerit volutpat. Cras ullamcorper
            quis orci et cursus. Curabitur bibendum sollicitudin purus. Vivamus
            eleifend eros orci, non gravida ex tristique at. Duis nec orci
            efficitur, condimentum justo sed, consequat ex. Quisque pulvinar,
            ante non vehicula pulvinar, turpis sem elementum purus, quis rhoncus
            ipsum arcu non nisl. Cras maximus, est sed scelerisque dignissim,
            augue nibh pretium dolor, id sagittis ipsum odio et mi. Praesent
            eget rutrum velit. Nulla facilisi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
