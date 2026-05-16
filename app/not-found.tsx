import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-brand-bg min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <p className="text-red-600 font-black text-8xl mb-4">404</p>
        <h1 className="text-white font-black text-3xl uppercase tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-zinc-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
