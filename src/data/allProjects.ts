type builtWith = {
  name: string;
};
type link = {
  name: string;
  link: string;
  svg?: string;
};

type github = {
  link: string;
  svg?: string;
};

export type Project = {
  year: number;
  name: string;
  madeAt?: string;
  builtWith: builtWith[];
  link?: link;
  github?: github;
  description: string;
  imagen?: string;
};

const linkSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

const githubSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';

const allProjects: Project[] = [
  {
    year: 2023,
    name: "HACE QR",
    madeAt: "Freelance",
    builtWith: [
      {
        name: "Astro",
      },
      {
        name: "React",
      },
      {
        name: "TailwindCSS",
      },
    ],
    link: {
      name: "haceqr.netlify.app",
      link: "https://haceqr.netlify.app/",
      svg: linkSVG,
    },
    description:
      "HACE QR es una aplicación web que permite generar códigos QR de manera rápida y sencilla, para el emprendimiento HACE. Hecho con Astro, React y TailwindCSS.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1713318654/637shots_so_airq6h.png",
  },
  {
    year: 2024,
    name: "JoaX",
    madeAt: "Personal",
    builtWith: [
      {
        name: "Nextjs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Prisma",
      },
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      },
    ],
    link: {
      name: "joax.vercel.app",
      link: "https://joax.vercel.app/",
      svg: linkSVG,
    },
    description:
      "JoaX es una app en proceso de desarrollo, hecha con Nextjs, MongoDB, Prisma, TypeScript y TailwindCSS. Es un proyecto personal que busca ser una plataforma como Twitter/X.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1713318766/487shots_so_vm0ocg.png",
  },
  {
    year: 2024,
    name: "Joa Store",
    madeAt: "Personal",
    builtWith: [
      {
        name: "Nextjs",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Sanity",
      },
      {
        name: "Stripe",
      },
      {
        name: "TailwindCSS",
      },
    ],
    link: {
      name: "joastore.vercel.app",
      link: "https://joastore.vercel.app/",
      svg: linkSVG,
    },
    description:
      "Joa Store es una app e-commerce simple. Con pasarela de pagos, carrito de compras y gestión de productos.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1709689760/883shots_so_xb2opm.png",
  },
  {
    year: 2023,
    name: "Joaverter",
    madeAt: "Personal",
    builtWith: [
      {
        name: "Nextjs",
      },
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "FFmpeg",
      },
    ],
    link: {
      name: "joaverter.vercel.app",
      link: "https://joaverter.vercel.app",
      svg: linkSVG,
    },
    github: {
      link: "https://github.com/demonjl/joaverter",
      svg: githubSVG,
    },
    description:
      "Joaverter es una herramienta en línea que te permite convertir archivos multimedia de forma rápida y sencilla. Convierte imágenes, audio y videos sin restricciones y sin costo alguno.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1696649244/joaverter_mpngao.png",
  },
  {
    year: 2023,
    name: "Foro EPICA",
    madeAt: "Personal",
    builtWith: [
      {
        name: "NodeJS",
      },
      {
        name: "Express",
      },
      {
        name: "EJS",
      },
      {
        name: "MySQL",
      },
      {
        name: "Bootstrap",
      },
    ],
    github: {
      link: "https://github.com/demonjl/comision-A-joaquin-lucero",
      svg: githubSVG,
    },
    description:
      "Un simple CRUD en NodeJS y MySQL, donde puedes leer, crear, editar y eliminar publicaciones, a traves de un formulario a la base de datos. Tecnologia SSR.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1695201012/foro-tp_hzgv4w.png",
  },
  {
    year: 2023,
    name: "FutbolData",
    madeAt: "Personal",
    builtWith: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Bootstrap",
      },
    ],
    github: {
      link: "https://github.com/Lucero-Joaquin/tpint_com104_grupo4",
      svg: githubSVG,
    },
    link: {
      name: "futboldata.netlify.app",
      link: "https://futboldata.netlify.app",
      svg: linkSVG,
    },
    description:
      "Este projecto esta basado en la propuesta presentada en el trabajo practico integrador, el cual pedia hacer una pagina web / onepage sobre una organizacion o emprendimiento que se nos ideara a los participantes del grupo.",
    imagen:
      "https://res.cloudinary.com/demonjl/image/upload/v1695201011/futboldata-ap40_srisom.png",
  },
];

export default allProjects;
