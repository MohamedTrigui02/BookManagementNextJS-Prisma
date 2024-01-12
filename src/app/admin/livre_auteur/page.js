import ListLivresAuteurs from '@/components/admin/ListLivresAuteurs';
const livres_auteurs=async()=>{
const response = await fetch(process.env.URL +"/api/livre_auteur", { cache: 'no-store' });
console.log(response);
const data = await response.json();
console.log(data);
return data;
}
const livre_auteurPage = async() =>{
const livre_auteur=await livres_auteurs()
return (
<div className="container">
<ListLivresAuteurs livre_auteur={livre_auteur}/>
</div>

)
}
export default livre_auteurPage
