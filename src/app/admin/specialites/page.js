import ListSpecialites from '@/components/admin/ListSpecialites';
const getSpecialites=async()=>{
const response = await fetch(process.env.URL +"/api/specialites", { cache: 'no-store' });
console.log(response);
const data = await response.json();
console.log(data);
return data;
}
const SpecialitesPage = async() =>{
const specialites=await getSpecialites()
return (
<div className="container">
<ListSpecialites specialites={specialites}/>
</div>

)
}
export default SpecialitesPage
