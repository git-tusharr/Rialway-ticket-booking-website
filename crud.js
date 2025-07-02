let FetchData=async()=>{
    let url='http://localhost:3000/railway'
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);

    let Show=document.querySelector("#dataShow")
    data.map((e)=>{
        Show.innerHTML+=`
        <tr>
            <td>${e.Name}</td>
            <td>${e.To}</td>
            <td>${e.From}</td>
            <td>${e.Departure}</td>
            <td>${e.Person}</td>
            <td>${e.Class}</td>
            <td>${e.Total}</td>
            <td onclick="Del('${e.id}')">Delete</td>
        </tr>
        `
    })

}

let Del=(id)=>{
    let url=`http://localhost:3000/railway/${id}`
    fetch(url,{method:"DELETE"})
}





let Ins=()=>{
    let name=document.querySelector("#name").value;
    let from=document.querySelector("#from").value;
    let to=document.querySelector("#to").value;
    let departure=document.querySelector("#departure").value;
    let person=document.querySelector("#person").value;
    let bookedclass=document.querySelector("#class").value;

    let url='http://localhost:3000/railway'

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name: name,
            From: from,
            To: to,
            Departure: departure,
            Person: Number(person),
            Class: bookedclass,
            Total: 500 * Number(person)
        })
    })
    location.href="crud.html"
    return false
}


FetchData();