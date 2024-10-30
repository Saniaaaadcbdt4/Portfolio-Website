//Access
let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
let sidemenu= document.getElementById("sidemenu");

//Experience
function opentab(tabname){
for(tablink of tablinks){
   tablink.classList.remove("active-link")
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
 }
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}

//Responsiveness
function openmenu(){
   sidemenu.style.right=0;
}
function closemenu(){
   sidemenu.style.right="-200px";
}
//database
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzJBu7l8zdddtzcrqJNrO2g_SoziwloCuEFeDpEuwvNB7BWzx4KhuB0G9q2gq-EZgiLlQ/exec'
  const form = document.forms['submit-to-google-sheet']
  let spanmsg=document.getElementById("msg");
  
//Data submission
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         spanmsg.innerHTML="Your message has submitted successfully!"
         setTimeout(function(){
            spanmsg.innerHTML=""
         },1000)
         form.reset();
      }
      )
      .catch(error => console.error('Error!'.error.message)
       )
  })



