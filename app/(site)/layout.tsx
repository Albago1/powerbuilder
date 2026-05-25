import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale } from "@/lib/locale";
import { isLaunchOfferActive } from "@/lib/launchOffer";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const launchActive = isLaunchOfferActive();
  return (
    <>
      <Header locale={locale} topOffset={launchActive ? "top-10" : "top-0"} />
      <main className={launchActive ? "pt-10" : ""}>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
