import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Fernando Gutz',
 keywords: ['Fernando Gutz', 'About Page'],
};

const AboutPage = () => {
  return (
      <span className="text-5xl">About {1+4} </span>
  )
}

export default AboutPage