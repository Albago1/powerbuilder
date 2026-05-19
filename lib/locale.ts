import { cookies } from "next/headers";
import { type Locale } from "./translations";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const val = store.get("pb_locale")?.value;
  if (val === "de" || val === "sq") return val;
  return "en";
}
