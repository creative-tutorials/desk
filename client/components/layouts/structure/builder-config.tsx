import { EditorTab } from "./form/editor";
import { ContentText } from "./form/content-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreviewTab } from "./form/preview";

export function BuilderConfig() {
  return (
    <section className="mt-14 flex flex-col gap-14 p-8">
      <ContentText />
      <div id="tabs">
        <Tabs defaultValue="editor" className="w-auto">
          <TabsList className="bg-zinc-900">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="editor">
            <EditorTab />
          </TabsContent>
          <TabsContent value="preview">
            <PreviewTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// export function GradualSpacing() {
//   const text = "Gradual Spacing";
//   const gradual = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 },
//   };
//   return (
//     <div className="flex justify-center space-x-1">
//       <AnimatePresence>
//         {text.split("").map((char, i) => (
//           <motion.h1
//             key={i}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={gradual}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
//           >
//             {char === " " ? <span>&nbsp;</span> : char}
//           </motion.h1>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
