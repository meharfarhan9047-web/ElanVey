import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="paper-bg flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="brutal-text text-7xl text-ev-neon-pink md:text-9xl">404</p>
      <h1 className="brutal-text mt-6 text-3xl text-ev-neon-yellow md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-bold text-ev-black/70">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10">
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-6 font-brutal text-sm uppercase text-ev-neon-pink hover:text-ev-neon-red"
      >
        Or contact us →
      </Link>
    </div>
  );
}
