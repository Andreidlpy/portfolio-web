import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SnapgramImg from "@/public/snapgram.webp";
import formbUilderImg from "@/public/formbuilder.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp Front-End",
    location: "Idat",
    description:
      "Completé con éxito un bootcamp intensivo de seis meses, ampliando mis conocimientos en desarrollo web y consolidando mis habilidades técnicas.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "Promolider",
    description:
      "Ocupé la posición de Frontend Developer, contribuyendo al desarrollo de soluciones web dinámicas y atractivas",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Udemy",
    description:
      "Como desarrollador, he trabajado en diversos proyectos utilizando tecnologías como React, Next.js, TypeScript, Tailwind, Prisma",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "FormBuilder",
    description:
      "A cutting-edge application designed for form creation and seamless sharing.",
    tags: ["React", "Next.js", "PostgresSQL", "Tailwind", "Prisma"],
    imageUrl: formbUilderImg,
  },
  {
    title: "Snapgram",
    description:
      "A captivating Instagram clone dedicated to photo sharing and posts. As the front-end developer,",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "AppWrite"],
    imageUrl: SnapgramImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
] as const;
