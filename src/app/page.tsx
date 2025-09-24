import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
  SignIn,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>Sign In</Button>
      </SignInButton>
    </div>
  );
}
