"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28 text-start text-pretty"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-pretty">
        Inicié mi viaje en programación explorando cursos en internet, luego me
        sumergí en un bootcamp de frontend. Mi enfoque se centra en convertir
        creatividad en experiencias de usuario impactantes, con rápida
        adaptación a tecnologías emergentes, atención a los detalles y
        compromiso constante con la mejora continua. Soy un{" "}
        <span className="font-medium">desarrollador frontend </span> apasionado
        y autodidacta, con experiencia destacada en el uso de tecnologías como{" "}
        <span className="font-medium">React, Next.js, MongoDB.</span> Además,
        tengo familiaridad con TypeScript y Prisma.
      </p>
    </motion.section>
  );
}
