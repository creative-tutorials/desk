import { Header } from "@/components/layouts/structure/header";
import { BuilderConfig } from "@/components/layouts/structure/builder-config";
import { FloatMenu } from "@/components/layouts/structure/float-menu";
import type { ParamsDictionary } from "@/types/params-dictionary";

export default function Page({ params }: ParamsDictionary) {
  return (
    <main>
      {/* =========== HEADER =========== */}
      <Header />
      {/* =========== CONTENT =========== */}
      <BuilderConfig />
      {/* =========== FLOATING MENU =========== */}
      <FloatMenu id={params.id} />
    </main>
  );
}
