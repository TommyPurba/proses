import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
  const body = await prisma.user.findMany();
  return NextResponse.json({ data: body });
}
