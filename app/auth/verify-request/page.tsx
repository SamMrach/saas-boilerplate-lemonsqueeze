import { authOptions } from '@/app/utils/auth';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions);
    if (session) {
      return redirect("/");
    }
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#ececec]">
        <Card className="w-1/4">
          <CardHeader>
          <img src="" alt="logo" className="rounded-full mb-5 mx-auto" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
             <p className="text-3xl mb-4 font-bold">Check your email</p>
             <p className="text-center">A sign in link has been sent to your email address.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}
