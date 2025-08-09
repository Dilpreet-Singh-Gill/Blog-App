import React from "react";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ContactCTA from "../components/ContactCTA";
import TestimonialsSection from "../components/TestimonialsSection";

export default function About() {
  return (
    <div>
      <AboutSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
