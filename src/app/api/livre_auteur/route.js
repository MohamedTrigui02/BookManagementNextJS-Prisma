import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const QueryLivA=async()=>{
try {
const listlA=await prisma.livre_auteur.findMany();
return listlA
} catch (error) {
console.log(error)
}
finally{
prisma.$disconnect()
}
}
export async function GET() {
const livre_auteur = await QueryLivA()
return NextResponse.json(livre_auteur);
}
// CREATE DATA
export async function POST(request) {
try {

const json = await request.json();
const livre_auteur = await prisma.livre_auteur.create({
data: json,
});
return NextResponse.json(livre_auteur);
} catch (error) {
return new NextResponse(JSON.stringify(error), {
status: 500,
headers: { "Content-Type": "application/json" },
});
}
}