const scrollToSection = (sectionSelector: string) => {
  const section = document.querySelector(sectionSelector);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default scrollToSection;
