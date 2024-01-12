'use client';
import React from 'react'
import Link from "next/link";
const ListAuteurs = ({auteurs}) => {
return (
<div className="container mx-auto mt-8 max-w-[560px]">
<div className="flex justify-between items-center pb-4 border-b border-dashed
border-gray-900 mb-4">
<h1 className="text-3xl font-semibold">AUTEURS</h1>
<Link
className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2
duration-200"
href="/create"
>
Create New
</Link>

</div>
<ul>
{auteurs.map((auteur) => (
<li key={auteur.id} className="py-2 flex justify-between w-full">
<span>
<strong>{auteur.nomauteur}</strong>
</span>
<span className="flex gap-2">
<Link className="text-blue-700 underline hover:no-underline"

href={`/${auteur.id}/edit`}>Edit</Link>

<Link className="text-red-500 underline hover:no-underline"

href={`/${auteur.id}/delete`}>Delete</Link>

</span>
</li>
))}
{auteurs?.length < 1 && <div className="py-2">No data</div>}
</ul>
</div>
)
}
export default ListAuteurs