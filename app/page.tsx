import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import EstimateForm from "@/components/EstimateForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <EstimateForm />
    </main>
  );
}