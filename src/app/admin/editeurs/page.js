import ListEditeurs from '@/components/admin/ListEditeurs';
const getEditeurs=async()=>{
const response = await fetch(process.env.URL +"/api/editeurs", { cache: 'no-store' });
console.log(response);
const data = await response.json();
console.log(data);
return data;
}
const EditeursPage = async() =>{
const editeurs=await getEditeurs()
return (
<div className="container">
<ListEditeurs editeurs={editeurs}/>
</div>

)
}
export default EditeursPage
