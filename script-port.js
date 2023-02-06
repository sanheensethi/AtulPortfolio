function getId(id){
	return document.getElementById(id);
}

function whoIHaveHelpedHTML(who,image){
  		return `
  			<div class="col col-md-4 col-lg-4" style="width:220px;">
			  <div class="st-iconbox st-style1" style="width:250px;">
			    <div class="st-iconbox-icon">
			      <img src="${image}" alt="">
			    </div>
			    <h2 class="text-center st-iconbox-title">${who}</h2>
			    <div class="st-iconbox-text"></div> 	
			  </div>
			  <div class="st-height-b30 st-height-lg-b30"></div>
			</div><!-- .col -->
  		`;
  	}

  	function howIHaveHelpedHTML(name,image,desc){
  		return `
  			<div class="col col-md-4 col-lg-4" style="width:220px;">
			  <div class="st-iconbox st-style1" style="width:250px;">
			    <div class="st-iconbox-icon">
			      <img src="${image}" alt="">
			    </div>
			    <h2 class="text-center st-iconbox-title">${name}</h2>
			    <div class="st-iconbox-text">${desc}</div> 	
			  </div>
			  <div class="st-height-b30 st-height-lg-b30"></div>
			</div><!-- .col -->
  		`;
  	}

  	async function whoIHaveHelped(){
  		let data = await fetch('https://script.google.com/macros/s/AKfycbyTpGdLINMZr0VyMSxmYqmdMsavtHRNztaUBXFFxEL-_03ahlgALIekf5WgnPmt8F0i/exec');
  		data = await data.json();
  		data = data.data;
  		let html = ``
  		i = 1;
  		for(obj of data){
  			if(i == 1){
  				html += "<div class='row'>"
  			}
  			html += whoIHaveHelpedHTML(obj.Who,obj.Image);
  			i++;
  			if(i==4){
  				html += "</div>"
  				i = 1;
  			}
  		}
  		getId('whoihelped').innerHTML = html;
  		// console.log(data)
  	}

  	async function howIhaveHelped(){
  		let data = await fetch('https://script.google.com/macros/s/AKfycbwEvzYU7gdGmWLnx_6CUbYQpBRzdf9tiAcV4sZgko2qGMWQsDqz7LSLH_zQmA8qWTv5/exec');
  		data = await data.json();
  		data = data.data;
  		let html = ``
  		i = 1;
  		for(obj of data){
  			if(i == 1){
  				html += "<div class='row'>"
  			}
  			html += howIHaveHelpedHTML(obj.How,obj.Image,obj.Description);
  			i++;
  			if(i==4){
  				html += "</div>"
  				i = 1;
  			}
  		}
  		getId('howihelped').innerHTML = html;
  		// console.log(data)
  	}


  	function skillsHTML(skill){
  		let html = `

  			<div class="st-progressbar-heading">
                <h2 class="st-progressbar-title text-center">${skill}</h2>
                <div class="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s"></div>
              </div>
              <div class="st-progressbar" data-progress="100">
                <div class="st-progressbar-in wow fadeInLeft"></div>
              </div>
            </div><!-- .st-single-progressbar -->
            <div class="st-height-b30 st-height-lg-b20"></div>
  		`;
  		return html;
  	}

  	async function myDetails(){
  		let data = await fetch("https://script.google.com/macros/s/AKfycbyb94FmnOXfsH5iDsUZtxiOz6M6aBtYPhO7LuRjl_wj4S_kZiSMzlWakeVwVnzZZZpl/exec");
  		data = await data.json()
  		data = data.data;
  		data = data[0];
  		console.log(data);

  		getId("mobileNumber").innerHTML = data.Mobile;
  		getId("mobileNumber2").innerHTML = data.Mobile;
  		getId("mobile").innerHTML = data.Mobile;
  		getId("name").innerHTML = data.Name;
  		getId("name2").innerHTML = data.Name;
  		getId("designation").innerHTML = data.Designation;
  		getId("designation2").innerHTML = data.Designation;
  		getId("dob").innerHTML = data.DOB;
  		getId("email").innerHTML = data.Email;
  		getId("email3").innerHTML = data.Email;
  		getId("address2").innerHTML = data.Address;
  		getId("resumeLink").setAttribute("href",data["CV Download Link"]);
  		getId("resumeLinkDownload").setAttribute("href",data["CV Download Link"]);
  		getId("contentText").innerHTML = data.Description;
  		getId("language").innerHTML = data.Language;
  		getId("copyrightYear").innerHTML = data["copyright year"];
  		getId("facebook").setAttribute("href",data["Facebook"]);
  		getId("instagram").setAttribute("href",data["Instagram"]);
  		getId("youtube").setAttribute("href",data["Youtube"]);
  		getId("linkedin").setAttribute("href",data["Linkedin"]);

  		if(data.Freelancer == "ON"){
			getId("freelancer").innerHTML = "Available";
  		}else{
  			getId("freelancer").parentElement.style.display = "none";
  		}

  		let skills = data.Skills.split("\\@");
  		let htmlCode = ``;
  		for(skill of skills){
  			htmlCode += skillsHTML(skill);
  		}
  		getId("skills").innerHTML = htmlCode;
  		getId("skillHeading").innerHTML = data["Skills Heading"];
  		getId("skillText").innerHTML = data["Skills Description"];
  	}

  	function projectHTML(code){
  		return `
  		<div class="col-lg-4 col-md-4">
          <div class="st-portfolio-single st-style1 st-lightgallery">
            <div class="st-portfolio-item">
              <div class="st-portfolio-img st-zoom-in">
                  <iframe style="box-shadow:1px 1px 5px #000" width="370" height="300" src="https://www.youtube.com/embed/${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
            </div>
          </div>
        </div>
        <div class="st-height-b0 st-height-lg-b30"></div>
        `;
  	}

  	async function projects(){
  		let data = await fetch("https://script.google.com/macros/s/AKfycbzt7zIal7irvw-KoPTo4DUQp-vdz7KvgTasFW71XU_6tC763uNaH-HadBHg9msJcPAx/exec");
  		data = await data.json();
  		let projectsData = data.data;
  		let projectHTMLCode = ``;
  		for(project of projectsData){
  			videoLink = project["Video Link"];
  			console.log(videoLink);
  			let code = ``;
  			if(videoLink.includes("youtu.be")){
  				codeData = videoLink.split("/");
  				console.log(codeData);
  				code = codeData[codeData.length - 1];
  			}else{
  				codeData = videoLink.split("=");
  				code = codeData[codeData.length - 1];
  			}
  			projectHTMLCode += projectHTML(code);
  		}
  		projectHTMLCode += `<div class="col-lg-12 text-center">
  			<div class="st-portfolio-btn" style="margin:auto">
            	<a href="#contact" id="youtubeLink" class="st-btn st-style1 st-color1">Load More ... Youtube</a>
      		</div>
        </div>`;
  		getId("project").innerHTML = projectHTMLCode;
  	}

  	projects();
  	whoIHaveHelped();
  	howIhaveHelped();
  	myDetails();



  	async function sendMessage(){
  		let name = getId("inputName").value;
  		let email = getId("inputEmail").value;
  		let subject = getId("inputSubject").value;
  		let message = getId("inputMsg").value;
  		let mobile = getId("inputMobile").value;
  		

  		object = {
                    name:name,
                    email:email,
                    subject:subject,
                    mobile:mobile,
                    message:message
                };

        scripturl = "https://script.google.com/macros/s/AKfycbwsTSp0vEFL1xmWGeIkZrI78N-zB9qFfF5pXkM0G4dRFLlYhso5dTfPPltczAXD2Vot/exec"

       	await fetch(scripturl, {
                    method: "POST",
                    body: JSON.stringify(object),
                    mode: 'no-cors',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        'Access-Control-Allow-Origin':'*'
                    }
                });
       	getId("inputName").value = "";
		getId("inputEmail").value = "";
		getId("inputSubject").value = "";
		getId("inputMsg").value = "";
		getId("inputMobile").value = "";
		getId("changeTitle").innerHTML = "Message Sent Successfully. We will contact you shortly."
		setTimeout(()=>{
			getId("changeTitle").innerHTML = "Send Message ..";
		},10000);
  	}