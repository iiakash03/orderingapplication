let table=document.getElementById("submit");
let price;
let dish;
let tab;


function showContentonScreen(object){

    document.getElementById('price').value='';
    document.getElementById('dish').value='';
    document.getElementById('cars').value='';

    const childHTML=`<li id=${object._id}> ${object.dish}-${object.price}
    <button onclick=deleteUser('${object._id}')> delete </button>
    <button onclick=updateUser('${object._id}')> Update </button>
    </li>`

    if(object.table==="1"){
       parentNode= document.getElementById("id1");
       parentNode.innerHTML=parentNode.innerHTML+childHTML;

    }else if(object.table==="2"){
        parentNode=document.getElementById("id2")
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
        
    }else if(object.table==="3"){
        parentNode=document.getElementById("id3")
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
        
    }else if(object.table==="4"){
        parentNode=document.getElementById("id4")
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
        
    }


}
window.addEventListener("DOMContentLoaded",()=>{
    let del=document.createElement('button');
        del.innerText='Delete';

    axios.get('https://crudcrud.com/api/0995a9d44b164a3489b731a41e529250/addData')
    .then((response)=>{
        console.log(response);
        for(let i=0;i<response.data.length;i++){
            showContentonScreen(response.data[i]);
        }
    })
})

table.addEventListener('click',submitButton);
function submitButton(e){
    //console.log("abc");
   e.preventDefault();

   price=document.getElementById("price").value;
   dish=document.getElementById("dish").value;
   tab=document.getElementById("cars").value;
   //console.log(tab);
   
   axios.post('https://crudcrud.com/api/0995a9d44b164a3489b731a41e529250/addData',
   {
    'price':price,
    'dish':dish,
    'table':tab
   })
   .then((response)=>{
    console.log(response.data);
    showContentonScreen(response.data);
   })
}


function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/0995a9d44b164a3489b731a41e529250/addData/${userId}`)
    .then(()=>{
        removeUserfromscreen(userId);
    })
}

function removeUserfromscreen(Id){
    //console.log(tab);
    if(tab==="1"){
        let parentNode= document.getElementById("id1");
        parentNode.removeChild(document.getElementById("Id"))
        //parentNode.innerHTML=parentNode.innerHTML+childHTML;
 
     }else if(tab==="2"){
         let parentNode=document.getElementById("id2")
         childNode=document.getElementById("Id")
         parentNode.removeChild(childNode);
         //parentNode.innerHTML=parentNode.innerHTML+childHTML;
         
     }else if(tab==="3"){
         let parentNode=document.getElementById("id3")
         parentNode.removeChild(document.getElementById("Id"))
         //parentNode.innerHTML=parentNode.innerHTML+childHTML;
         
     }else if(tab==="4"){
         let parentNode=document.getElementById("id4")
         parentNode.removeChild(document.getElementById("Id"))
         //parentNode.innerHTML=parentNode.innerHTML+childHTML;
         
     }
}

