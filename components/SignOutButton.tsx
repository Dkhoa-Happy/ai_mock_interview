"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.actions";
import { useState } from "react";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      // The redirect will be handled by the server after signOut completes
    } catch (error) {
      console.error("Failed to sign out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 text-primary-100 hover:text-primary-100/90 hover:bg-primary-100/10 transition-colors"
      onClick={handleSignOut}
      disabled={isLoading}
    >
      <LogOut className="h-4 w-4" />
      <span>Sign out</span>
    </Button>
  );
}
