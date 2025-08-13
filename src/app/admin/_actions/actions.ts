"use server";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  errors?: {
    email?: string;
    password?: string;
  };
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  const errors: LoginState["errors"] = {};

  if (!email) {
    errors.email = "Email is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  if (errors.email || errors.password) {
    return { errors };
  }

  const user = await prisma.user.findFirst({
    where: { name: email }, // Ensure 'email' is unique in your schema
  });

  if (!user) {
    return { errors: { email: "Email not found" } };
  }

  if (user.password !== password) {
    return { errors: { password: "Incorrect password" } };
  }

  const cookieStore = await cookies();
  cookieStore.set("userId", user.id.toString(), {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  redirect("/admin/dashboard");
}
