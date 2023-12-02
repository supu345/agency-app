import Hero from "@/components/Hero";

import Stats from "@/components/Stats";
import WorkList from "@/components/WorkList";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <>
      <Hero />

      <WorkList />
      <Stats />
      <FeaturedProject />
    </>
  );
}
