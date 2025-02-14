// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { Button } from "@/components/ui/button";

// This page uses the craft.tsx component and design system
export default async function Home() {
  // const res = await fetch('https://akiyaz.io/wp-json/wp/v2/pages');
  // const index = await res.json().then((p) => p.filter((p: any) => p["id"] == 30));

  return (
    <Section>
      <Container>
        {/* <div dangerouslySetInnerHTML={{ __html: index[0].content.rendered }} /> */}
        <Main />
      </Container>
    </Section>
  );
}

const Main = () => {
  return (
    <main className="space-y-6">
      <Prose className="text-center">
        <h1>
          <Balancer>Akiyaz (logo)</Balancer>
        </h1>

        <h3>
          An Adventure Like No Other
        </h3>
        <p>
          Where every journey is an opportunity, and every discovery is a triumph in the wilds of Japan's untapped akiya real estate markets
        </p>
      </Prose>

      <div className="flex gap-4 justify-center">
        <Button asChild className="hidden sm:flex">
          <Link href="/pages/services">Our Services</Link>
        </Button>
        <Button asChild className="hidden sm:flex">
          <Link href="/pages/about-akiyaz">About us</Link>
        </Button>
      </div>
    </main>
  );
};
