let FetchData=async()=>{
    let url='http://localhost:3000/railway'
    let res=await fetch(url);
    let data=await res.json();

    datashow(data)
}

let searchh=async()=>{
    let searchinp=document.querySelector("#Searchh").value.toLowerCase()

    let url=`http://localhost:3000/railway`

    let res=await fetch(url,{method:"GET"})

    let data=await res.json()

      let FilterData=data.filter((e)=>{

        return e.Name.toLowerCase().includes(searchinp)
 
      })

      datashow(FilterData)
}



let datashow=(data)=>{

    let Show=document.querySelector("#dataShow")
     Show.innerHTML=""

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
            <td onclick="formopen('${e.id}')">Update</td>
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

     location.href = "crud.html";
    return false;
    
}


FetchData();

let formopen=async (id)=>{
    let url=`http://localhost:3000/railway/${id}`

    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    let FormData=`
    Name<br>
      <input type="text" id="upname" value="${data.Name}"><br><br>

      From<br>
      <select id="upfrom" value="${data.From}">
        <option value="">-- Select City --</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Pune">Pune</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Lucknow">Lucknow</option>
      </select><br><br>

      To<br>
      <select id="upto" value="${data.To}">
        <option value="">-- Select City --</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Pune">Pune</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Lucknow">Lucknow</option>
      </select><br><br>

      Departure Date<br>
      <input type="date" id="updeparture" value="${data.Departure}"><br><br>

      Number of Passengers<br>
      <input type="number" id="upperson" value="${data.Person}"><br><br>

      Class<br>
      <select id="upclass" value="${data.Class}">
        <option value="">-- Select Class --</option>
        <option value="Sleeper">Sleeper</option>
        <option value="AC 3-Tier">AC 3-Tier</option>
        <option value="AC 2-Tier">AC 2-Tier</option>
        <option value="AC First Class">AC First Class</option>
        <option value="Chair Car">Chair Car</option>
      </select><br><br>

      <input type="submit" value="Update Now" onclick="return updateData('${data.id}')"/>`

      document.querySelector("#formContainer").innerHTML = FormData;
}

let updateData=async(id)=>{

    let name=document.querySelector("#upname").value;
    let from=document.querySelector("#upfrom").value;
    let to=document.querySelector("#upto").value;
    let departure=document.querySelector("#updeparture").value;
    let person=document.querySelector("#upperson").value;
    let bookedclass=document.querySelector("#upclass").value;

    let url=`http://localhost:3000/railway/${id}`

    await fetch(url,{
        method:"PUT",
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