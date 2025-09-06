import Editor from "@/modules/editor";
import Features from "@/modules/features";
import Hero from "@/modules/hero";
import Pricing from "@/modules/pricing";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    <Features />
    <Pricing />
    <Editor />
   </div>
  );
}
