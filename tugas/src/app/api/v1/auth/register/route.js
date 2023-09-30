import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { username, fullName, No_Hp, Password } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const createUser = await prisma.user.create({
      data: {
        username,
        fullName,
        No_Hp,
        Password: hashedPassword,
      },
    });
    return NextResponse.json(
      { message: "Register success...." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "register gagal..." }, { status: 400 });
  }
}
