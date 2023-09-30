import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";


export async function GET(req) {
    const bodyAdmin = await prisma.admin.findMany();
    return NextResponse.json({data: bodyAdmin, messege : "hello world"}, {status:201});
}


export async function POST(req) {
    // const newDataAdmin = await prisma.admin.findMany();
    const {username, FullName, No_Hp, Password} = await req.json();
    // console.log(username);
    // console.log(body);
    return NextResponse.json({data: {username, FullName, No_Hp, Password}, messege:"test aja"},{status :201});
}