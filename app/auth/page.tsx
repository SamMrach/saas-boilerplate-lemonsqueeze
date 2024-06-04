import SignInForm from "@/components/shared/SigInForm";
import SigninWithGithub from "@/components/shared/SignInWithGithub";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth/next";
import React from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const AuthRoot = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#ececec]">
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SigninWithGithub />
            <hr className="h-px bg-gray-200 my-5"/>
            <SignInForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRoot;
