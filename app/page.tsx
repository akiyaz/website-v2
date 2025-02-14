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

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Diamond size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
      </div>
    </main>
  );
};
