'use client';

/**
 * Shared navigation utility to handle smooth scrolling to sections
 * while taking into account if the user is currently on the home page or a subpage.
 */
export const navigateToSection = (navigate: any, location: any, sectionId: string) => {
  if (location.pathname !== "/") {
    navigate("/");
    // Delay slightly to allow the home page to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
