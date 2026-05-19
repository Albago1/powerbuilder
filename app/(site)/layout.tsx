import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale } from "@/lib/locale";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
