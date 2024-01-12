import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const QueryEdite=async()=>{
try {
const listEdit=await prisma.editeurs.findMany();
return listEdit
} catch (error) {
console.log(error)
}
finally{
prisma.$disconnect()
}
}
export async function GET() {
const editeurs = await QueryEdite()
return NextResponse.json(editeurs);
}
// CREATE DATA
export async function POST(request) {
try {

const json = await request.json();
const editeurs = await prisma.editeurs.create({
data: json,
});
return NextResponse.json(editeurs);
} catch (error) {
return new NextResponse(JSON.stringify(error), {
status: 500,
headers: { "Content-Type": "application/json" },
});
}
}