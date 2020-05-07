/* const studentdetail = {
    first_Name :null,
    last_Name :  null,
    status : null,
    mobile : null,
    email :null,
    profile_summary: null,
    usn: null,
    dob: null,
    gender: null,
    mother_name:null,
    father_name: null,
    spoken_languages: null,
    present_address: null,
    permanent_address:null,
    pan_no: null,
    passport_no: null,
    aadhaar_no: null,
    career_objective: null,
    academic_qualification:[{
    tenth:[{
        gpa: null,
        board: null,
        institution: null,
        year_of_passing: null
    }],
    pu:[{
        gpa: null,
        board:null,
        institution: null,
        year_of_passing: null
    }],
    diploma:[{
        gpa: null,
        board:null,
        institution: null,
        year_of_passing: null
    }],
    ug:[{
        course:null,
        gpa:null,
        branch: null,
        university:null,
        institution: null,
        year_of_passing:null,
    }],
    pg:[{
        course:null,
        gpa:null,
        branch: null,
        university:null,
        institution: null,
        year_of_passing:null,
    }]
    }],
    interships:[{
        company_name: null,
        project:null,
        description: null,
        duration:null,
    }],
    awards_and_certifications:[{ 
        awards:null
    }],
    projects: [{
        title:null,
        summary:null,
        team_size:null,
        role:null,
        link:null,
    }],  
    technical_skills:[{
        skill:null,
        level:null
    }],
    workshops:null,
    hobbies:null,
    additional_info:[{
        title:null,
        description:null
    }]
};

*/



    var scount = 0
    var icount = 10000
    var acount = 1000
    var pcount = 300
    var wcount = 600
    var dcount = 900
    console.log(icount + 1)
    function addNewInternship() {
        icount += 1;
        var internship = document.createElement("div");
        internship.classList.add(icount);
        internship.innerHTML = `
        
            <div class="field">
                <label class="label">Organisation Name*:</label>
                <div class="control">
                <input class="input" type="text" placeholder="The Organisation Name">
                </div>
            </div>
            
            <div class="field">
                <label class="label">Project Under Taken*:</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Project Under Taken">
                </div>
            </div>
            <div class="field">
                <label class="label">Technology Used and Description*:</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Technology Used and Description"></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Responsibility and Duration*:</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Responsibility and Duration"></textarea>
                </div>
            </div>
            <div class="control">
                <button class="button is-link" id=${icount} onclick="removeInternship()">Remove</button>
            </div>
        `;
        document.getElementById('div1').appendChild(internship);
    }

    function removeInternship() {
        console.log("outside")

        document.onclick = function (e) {
            console.log("inside 1")
            if (e.target.tagName == 'BUTTON') {
                console.log("inside")
                id = e.target.getAttribute("id");
                console.log(id)
                var internships = document.getElementById('div1');
                var internship = document.getElementsByClassName(id);
                console.log(internship[0]);
                internship[0].parentNode.removeChild(internhip[0]);

            }
        }


    }


    function addNewAward() {
        acount = acount + 1
        console.log("hi bro")
        var award = document.createElement("div");
        award.classList.add(acount);
        award.innerHTML = `<div class="field">
                <label class="label">Awards and Certifications*:</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Your achievements and Certifications(enter the link to Certifications if available)"></textarea>
                </div>
            </div>
            <div class="control">
                <button class="button is-link" id=${acount} onclick="removeAward()">Remove</button>
            </div>`;
        document.getElementById('div3').appendChild(award);
    }

    function removeAward() {
        document.onclick = function (e) {
            console.log("inside 1")
            if (e.target.tagName == 'BUTTON') {
                console.log("inside")
                id = e.target.getAttribute("id");
                var awards = document.getElementById('div3');
                var award = document.getElementsByClassName(id);
                console.log(award[0]);
                award[0].parentNode.removeChild(award[0]);

            }
        }

    }


    function addNewSkill() {
        scount = scount + 1
        console.log("hi bro")
        var skill = document.createElement("div");
        skill.classList.add(scount);
        skill.innerHTML = `<div class="field">
        <label class="label">Skill* :</label>
        <div class="control">
          <input class="input" type="text" placeholder="eg:Python">
        </div>
      </div>
      
      <div class="field">
        <label class="label">Level* :</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="eg:Beginner">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
    
    <div class="field is-grouped">
        <div class="control">
          <button class="button is-link " id=${scount} onclick="removeSkill()">Remove</button>
        </div>
    </div>
    `;
        document.getElementById('div2').appendChild(skill);

    }

    function removeSkill() {
        console.log("outside")

        document.onclick = function (e) {
            console.log("inside 1")
            if (e.target.tagName == 'BUTTON') {
                console.log("inside")
                id = e.target.getAttribute("id");
                var skills = document.getElementById('div2');
                var skill = document.getElementsByClassName(id);
                console.log(skill[0]);
                skill[0].parentNode.removeChild(skill[0]);

            }
        }


    }

    function addNewProject() {
        pcount = pcount + 1
        console.log("hi bro")
        var project = document.createElement("div");
        project.classList.add(pcount);
        project.innerHTML = `<div class="field">
                <label class="label">Project Title*:</label>
                <div class="control">
                <input class="input" type="text" placeholder="Title of the Project">
                </div>
            </div>
            
            <div class="field">
                <label class="label">Summary of Project*:</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Technology Used and Description"></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Team Size,Roles and Duration*:</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Team Size,Roles and Duration" ></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Project Link:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Link to the repository where the project is stored(optional)">
                </div>
            </div>
            <div class="control">
                <button class="button is-link" id=${pcount} onclick="removeProject()">Remove</button>
            </div>
        </div>`;
        document.getElementById('div4').appendChild(project);

    }

    function removeProject() {
        document.onclick = function (e) {
            console.log("inside 1")
            if (e.target.tagName == 'BUTTON') {
                console.log("inside")
                id = e.target.getAttribute("id");
                var projects = document.getElementById('div4');
                var project = document.getElementsByClassName(id);
                console.log(project[0]);
                project[0].parentNode.removeChild(project[0]);

            }
        }
    }


    function addWorkshop() {
        wcount = wcount + 1
        console.log("hi bro")
        var workshop = document.createElement("div");
        workshop.classList.add(wcount);
        workshop.innerHTML = `<div class="field">
                <label class="label">Workshops / Seminars / Trainings Attended*:</label>
                <div class="control">
                <input class="input" type="text" placeholder="Workshops / Seminars / Trainings Attended">
                </div>
            </div>
            <div class="control">
                <button class="button is-link" id=${wcount} onclick="removeWorkshop()">Remove</button>
            </div>`;
        document.getElementById('div5').appendChild(workshop);
    }

    function removeWorkshop() {
        document.onclick = function (e) {
            console.log("inside 1")
            if (e.target.tagName == 'BUTTON') {
                console.log("inside")
                id = e.target.getAttribute("id");
                var workshops = document.getElementById('div5');
                var workshop = document.getElementsByClassName(id);
                console.log(workshop[0]);
                workshop[0].parentNode.removeChild(workshop[0]);

            }
        }
    }


    function addInfo() {

        dcount += 1;
        var info = document.createElement("div");
        info.classList.add(dcount);
        info.innerHTML = `<div class="field">
                <label class="label">Title :</label>
                <div class="control">
                <input class="input" type="text" placeholder="Title">
                </div>
            </div>
            <div class="field">
                <label class="label">Description :</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Description"></textarea>
                </div>
            </div>
            <div class="control">
                <button class="button is-link" id=${dcount} onclick="removeDescription()">Remove</button>
            </div>`;
        document.getElementById('div7').appendChild(info);
    }


    function fillPermanent(f) {
        if (f.permanentaddress.checked == true) {
            f.PermanentAddress.value = f.PresentAddress.value;
        }
    }

    function displayChange() {
        var allForms = document.getElementsByClassName('display-form');
        for (var i = 0; i < allForms.length; i++) {
            allForms[i].style.display = "none";
        }
        console.log("form")
        document.onclick = function (e) {
            if (e.target.tagName == 'A') {
                id = e.target.getAttribute("href");
                id = id.substring(1)
                console.log(id)
                var form = document.getElementById(id);
                console.log(form)
                form.style.display = "block";

            }

        }
    }

    function sideDisplayChange() {
        console.log("loading")
        var allForms = document.getElementsByClassName('sidenav');
        for (var i = 0; i < allForms.length; i++) {
            console.log(allForms[i])
            allForms[i].style.display = "none";
        }
        style_side_links = document.querySelectorAll(".side-menu div ul li")
        style_side_links.forEach(element => {
            element.classList.remove("side-nav")
            
        });
        document.onclick = function (e) {
            console.log("load2")
            console.log(e.target.parentElement.tagName)
            if (e.target.parentElement.tagName == 'A') {
                id = e.target.parentElement.getAttribute("href");
                console.log(id)
                id = id.substring(1)
                var form = document.getElementById(id);
                console.log(form)
                form.style.display = "block";

            }

        }
    }

    document.addEventListener("DOMContentLoaded",function(e){
        var hamburger=document.getElementsByClassName("hamburger")
        var wrapper=document.querySelector(".wrapper");
        console.log(hamburger.length)
        hamburger[0].addEventListener("click", function(){
        wrapper.classList.toggle("collapse");
      });
      })
