import ListAuteurs from '@/components/admin/ListAuteurs';
const getAuteurs=async()=>{
const response = await fetch(process.env.URL +"/api/auteurs", { cache: 'no-store' });
console.log(response);
const data = await response.json();
console.log(data);
return data;
}
const AuteursPage = async() =>{
const auteurs=await getAuteurs()
return (
<div className="container">
<ListAuteurs auteurs={auteurs}/>
</div>

)
}
export default AuteursPage
