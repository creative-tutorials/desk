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
      <meta property="og:url" content="https://docs-desk.vercel.app" />
      <meta property="og:site_name" content="Desk" />
      <meta
        name="keywords"
        content="Next.js, Tailwind, Shadcn, Form Builder, Desk, Build forms"
      />
      <meta property="og:image" content="https://desk.vercel.app/desk.avif" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@deskdev" />
      <meta name="twitter:creator" content="@deskdev" />
      <meta
        name="twitter:title"
        content="Desk || Form builder for your next application"
      />
      <meta
        name="twitter:description"
        content="Open source alternative to Google Forms"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
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
        <a href="https://desk.vercel.app" target="_blank">
          Desk
        </a>
        .
      </span>
    ),
  },
  project: {
    link: "https://github.com/creative-tutorials/desk",
  },
  primaryHue: {
    dark: 342,
  },
  // ... other theme options
};
