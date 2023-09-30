import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { username, Password } = await req.json();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!findUser) {
      return NextResponse.json(
        { error: "username not found.. " },
        { status: 400 }
      );
    }
    const hanshedPassword = findUser.Password;
    const isPasswordValid = await bcrypt.compare(Password, hanshedPassword);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }
    const payload = {
      username: findUser.username,
    };
    const token = sign(payload, process.env.JWT_RANDOM_TOKEN, {
      expiresIn: "10d",
    });

    const res = NextResponse.json(
      { accesstoken: token, message: "login successfuly" },
      { status: 201 }
    );
    res.cookies.set("x-token", token);
    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
