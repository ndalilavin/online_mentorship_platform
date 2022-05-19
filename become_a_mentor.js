const submitbtn = document.querySelector(".submitbtn")
    submitbtn.addEventListener("click", e=>{
      //alert(4)
    e.preventDefault() 
    let fname,lname,experience,country,subject,profile,profession
    fname = document.getElementById("fname").value
    console.log(fname)
    lname = document.getElementById('lname').value
    experience = document.getElementById('experience').value
    country = document.getElementById('country').value
    subject = document.getElementById('subject').value
    profile = document.getElementById('profile').value
    profession = document.getElementById('profession').value

    localStorage.setItem('first Name', fname)
    localStorage.setItem('last name', lname)
    localStorage.setItem('experience', experience)
    localStorage.setItem('country', country)
    localStorage.setItem('subject', subject)

   var formData = document.querySelector('#formdata');
   formData.innerHTML = `
    <h4>INFORMATION</h4>
    <table id="customers">
  <tr>
    <th>Profile</th>
    <th>First Name</th>
    <th>LastName</th>
    <th>Country</th>
    <th>Experience</th>
    <th>Profession</th>
    <th>About You</th>

  </tr>
  <tr>
    <td>${profile}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${country}</td>
    <td>${experience}</td>
    <td>${profession}</td>
    <td>${subject}</td>
    
  </tr>
</table>
    `;

    })
   