

let xmlContent = '';
let tableBooks = document.getElementById('books');
var events;
fetch('event-details-data.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        events = xmlDOM.querySelectorAll('EVENT');


        
        //testing

        let rules= events[0].querySelectorAll('RULE');

        rules.forEach(ruleXmlNode => {

            test= ruleXmlNode.innerHTML;
        });
        //testing

        events.forEach(eventXmlNode => {

            test= eventXmlNode.children[0].innerHTML;
        });

    });
});



function fun(a) {
    document.getElementById("my-modal-title").innerHTML = events[a].children[0].innerHTML;
    document.getElementById("first-prize").innerHTML ="&#8377; "+ events[a].children[1].innerHTML;
    document.getElementById("second-prize").innerHTML ="&#8377; "+ events[a].children[2].innerHTML;
    document.getElementById("day").innerHTML = "Day "+ events[a].children[3].innerHTML;

    



    
    let notpc=document.getElementById("notpc");
    notpc.innerText=": "+events[a].children[4].innerHTML;
    
    let noppt=document.getElementById("noppt");
    noppt.innerText=": "+events[a].children[5].innerHTML;
    
    let fees=document.getElementById("fees");
    fees.innerText=": "+events[a].children[6].innerHTML;
    
    document.getElementById("rules").innerHTML="";
    let rulearea=document.getElementById("rules");
    let rules= events[a].querySelectorAll('RULE');
    rules.forEach(ruleXmlNode => {
        let p = document.createElement('p');
        p.innerText=ruleXmlNode.innerHTML;
        rulearea.appendChild(p);
        let br= document.createElement('br');
        rulearea.appendChild(br);
    });

    // staff 
    document.getElementById("staff").innerHTML="";
    let staffarea=document.getElementById("staff");
    let staffs= events[a].querySelectorAll('STAFF');
    staffs.forEach(ruleXmlNode => {
        let p = document.createElement('p');
        p.innerText=ruleXmlNode.innerHTML;
        staffarea.appendChild(p);
    });

    // student
    document.getElementById("students").innerHTML="";
    let studentarea=document.getElementById("students");
    let students= events[a].querySelectorAll('STUDENT');
    students.forEach(ruleXmlNode => {
        let p = document.createElement('p');
        p.innerText=ruleXmlNode.innerHTML;
        studentarea.appendChild(p);
    });


}