import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn and Grow with Our Courses
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access high-quality video courses taught by expert instructors
            </p>
            <Button size="lg" className="text-lg px-8">
              Browse Courses
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;