import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;