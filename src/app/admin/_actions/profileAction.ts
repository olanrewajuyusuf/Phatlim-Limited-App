"use server";

import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs";

export async function editProfileAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name || !password || !confirmPassword) {
    return { error: "All fields are required", success: false };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match", success: false };
  }

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: "e94gfdgvbc00bndfh13" },
      data: { name, password },
    });

    return { error: null, success: true };
  } catch (err) {
    console.error("Profile update failed:", err);
    return { error: "Something went wrong. Try again.", success: false };
  }
}
