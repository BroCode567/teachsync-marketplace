import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRobot, setIsRobot] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isRobot) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please verify that you are not a robot",
      });
      return;
    }

    try {
      if (isRegistering) {
        // Handle registration
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });

        if (signUpError) throw signUpError;

        if (signUpData.user) {
          // Insert into profiles table
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([{ 
              id: signUpData.user.id, 
              full_name: name, 
              email 
            }]);

          if (profileError) throw profileError;

          toast({
            title: "Registration successful!",
            description: "Please check your email to verify your account.",
          });
          
          setIsRegistering(false);
        }
      } else {
        // Handle login
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) throw signInError;

        toast({
          title: "Login successful!",
          description: "Redirecting to dashboard...",
        });

        // Check if user is admin (has admin in email)
        if (email.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      console.error('Auth error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {isRegistering ? "Register" : "Login"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {isRegistering && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={isRegistering}
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="robot"
                    checked={isRobot}
                    onCheckedChange={(checked) => setIsRobot(checked as boolean)}
                  />
                  <label
                    htmlFor="robot"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I am not a robot
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  {isRegistering ? "Register" : "Login"}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {isRegistering
                      ? "Already have an account? Login"
                      : "Don't have an account? Register"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Login;