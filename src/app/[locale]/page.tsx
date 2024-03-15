import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function IndexPage({
  params
}: {
  params: { locale: "en" | "no" };
}) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("IndexPage");
  return <h1>{t("title")}</h1>;
}
