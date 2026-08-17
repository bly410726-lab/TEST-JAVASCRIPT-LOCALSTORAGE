
console.log("ookok");
let form = document.getElementById('form-submit');
// let users = [];

let table = document.getElementById('table');
let users = JSON.parse(localStorage.getItem('users')) || [] ;


form.addEventListener('submit' , function(){
    let id = Date.now();
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;
    let role = document.getElementById('role').value;

    let user = {
        Id : id ,
        Name : name,
        Gender : gender,
        Email : email,
        Role : role
    }

    users.push(user);
    const see = localStorage.setItem('users',JSON.stringify(users));
    console.log(users);



    showdata();
})
console.log("ookok");

let  h = "" ;
function showdata(){
   

    users.forEach((value)=>{
         h += `

    <tr>
                    <td class="border-1 border-gray-300 py-4 text-center">
                    ${value.Id}
                    </td>
                    <td class="border-1 border-gray-300 py-4 text-center">
 ${value.Name}
                    </td>
                    <td class="border-1 border-gray-300 py-4 text-center">
 ${value.Gender}
                    </td>
                    <td class="border-1 border-gray-300 py-4 text-center">
 ${value.Email}
                    </td>
                    <td class="border-1 border-gray-300 py-4 text-center">
 ${value.Role}
                    </td>
                   <td class="border-1 border-gray-300 py-4 text-center">
                    <button class="bg-blue-600 text-white py-3 px-5 rounded-2xl border-1 border-blue-600 hover:bg-white hover:text-blue-600 transition-all">
                        Edit
                    </button>
                    <button class="bg-red-500 text-white py-3 px-5 rounded-2xl border-1 border-red-500 hover:text-red-500 hover:bg-white transition-all">
                        Delete
                    </button>
                    </td>

    
    ` ;
    })

table.innerHTML += h ;

}

showdata();


















































