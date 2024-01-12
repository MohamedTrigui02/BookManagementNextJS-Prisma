import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const QuerySpec=async()=>{
try {
const listSpec=await prisma.specialites.findMany();
return listSpec
} catch (error) {
console.log(error)
}
finally{
prisma.$disconnect()
}
}
export async function GET() {
const specialites = await QuerySpec()
return NextResponse.json(specialites);
}
// CREATE DATA
export async function POST(request) {
try {

const json = await request.json();
const specialites = await prisma.specialites.create({
data: json,
});
return NextResponse.json(specialites);
} catch (error) {
return new NextResponse(JSON.stringify(error), {
status: 500,
headers: { "Content-Type": "application/json" },
});
}
}