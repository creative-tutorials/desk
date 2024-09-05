// import image
import Image from "next/image";

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="Desk || Form builder for your next application"
      />
      <meta
        property="og:description"
        content="Open source alternative to Google Forms"
      />
    </>
  ),
  logo: () => {
    return (
      <div className="flex items-center gap-2">
        <Image
          src={"/icon.png"}
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <span className="text-red-500">Desk</span>
      </div>
    );
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Desk
        </a>
        .
      </span>
    ),
  },
  project: {
    link: "https://github.com/shuding/nextra",
  },
  primaryHue: {
    dark: 342,
  },
  // ... other theme options
};
