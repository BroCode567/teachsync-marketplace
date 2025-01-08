import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login successful!",
      description: "Redirecting to dashboard...",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-3xl font-bold mb-8">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;