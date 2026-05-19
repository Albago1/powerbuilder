import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col">
      <div className="flex items-center px-4 py-4 border-b border-brand-border">
        <Link href="/" className="flex items-center">
          <span className="text-red-600 font-black text-lg tracking-tight">POWER</span>
          <span className="text-white font-black text-lg tracking-tight">BUILDER</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
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
    </div>
  );
}
