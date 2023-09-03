fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let template = "";
    let trtemplate = "";

    for (let i = 0; i < data.length; i++) {
      const dataa = data[i];
      console.log(dataa);
      trtemplate += `
    <tr>
      <td>${dataa.id}</td>
      <td>${dataa.firstName}</td>
      <td>${dataa.lastName}</td>
      <td>${dataa.email}</td>
      <td>${dataa.age}</td>
      <td>${dataa.contactNumber}</td>
      <td>${dataa.dob}</td>
    </tr>

       `;
    }

    template = `
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Contact Number</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody> ${trtemplate} </tbody>
      </table>`;
    
    document.querySelector("#container").innerHTML = template;
  });
