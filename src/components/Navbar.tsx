import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            CourseHub
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/videos" className="hover:text-primary transition-colors">
              Videos
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};