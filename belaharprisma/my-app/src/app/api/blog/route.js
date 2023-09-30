import { prisma } from "@/utils/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  const bodyBlog = await prisma.blog.findMany();
  return NextResponse.json(
    { data: bodyBlog, message: "hello world" },
    { status: 201 }
  );
}

export async function POST(req) {
  const { email, password } = await req.json();
  return NextResponse.json(
    {
      data: { email, password },
      message: "hello world",
    },
    { status: 201 }
  );
}
