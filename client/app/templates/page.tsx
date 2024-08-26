import { Header } from "@/components/layouts/structure/header";
import { TemplateContent } from "@/components/layouts/structure/template-content";
import { FloatMenu } from "@/components/layouts/structure/float-menu";

export default function Page() {
  return (
    <main>
      {/* =========== HEADER =========== */}
      <Header />
      {/* =========== CONTENT =========== */}
      <TemplateContent />
      {/* =========== FLOATING MENU =========== */}
      <FloatMenu />
    </main>
  );
}
