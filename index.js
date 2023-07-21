let module = {};
let quality = "";
let name = "";
let grade = 0;

let generateFeedback = ()=>{
    let comments = "";
    let commentIndex = 1;

    let moduleComments = document.querySelectorAll("#moduleComments input");
    for(let i = 0; i < moduleComments.length; i++){
        if(moduleComments[i].checked){
            comments += `${commentIndex}) ${module.comments[moduleComments[i].getAttribute("data-idx")].comment}\n\n`;
            commentIndex++;
        }
    }
    
    let gitHubInputs = document.querySelectorAll("#gitHubComments input");
    for(let i = 0; i < gitHubInputs.length; i++){
        if(gitHubInputs[i].checked){
            comments += `${commentIndex}) ${gitHub[parseInt(gitHubInputs[i].getAttribute("data-idx"))].comment}\n\n`;
            commentIndex++;
        }
    }

    if(comments !== "") comments = comments.substring(0, comments.length - 2);
    return `${module.text.introduction(quality, name)}

${comments}

${module.text.conclusion(quality)}

${grade}/100
-Central grader, LM`;
}

let updateComment = ()=>{
    document.getElementById("feedbackText").value = generateFeedback();
}

let displayCommentOptions = ()=>{
    let container = document.getElementById("moduleComments");
    while(container.children.length > 0){
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < module.comments.length; i++){
        let label = document.createElement("label");
        label.textContent = module.comments[i].title;
        container.appendChild(label);

        switch(module.comments[i].type){
            case "checkbox":
                let input = document.createElement("input");
                input.type = "checkbox";
                input.onchange = ()=>{updateComment()};
                input.setAttribute("data-idx", i);
                label.appendChild(input);
                break;
        }
    }
}

let chooseModule = (num)=>{
    switch(num){
        case 1: module = module01; break;
        case 2: module = module02; break;
        case 3: module = module03; break;
        case 4: module = module04; break;
        case 5: module = module05; break;
        case 6: module = module06; break;
        case 9: module = module09; break;
        case 10: module = module10; break;
        case 11: module = module11; break;
        case 12: module = module12; break;
        case 13: module = module13; break;
        case 14: module = module14; break;
        case 17: module = module17; break;
        case 18: module = module18; break;
        case 19: module = module19; break;
        case 20: module = module20; break;
        case 21: module = module21; break;
    }

    document.getElementById("chooseModule").style.display = "none";
    document.getElementById("chooseQuality").style.display = "flex";
}

let chooseQuality = (qual)=>{
    quality = qual;

    document.getElementById("chooseQuality").style.display = "none";
    document.getElementById("studentName").style.display = "flex";
    document.getElementById("nameInput").focus();
}

let chooseName = ()=>{
    event.preventDefault();
    name = document.getElementById("nameInput").value;

    document.getElementById("studentName").style.display = "none";
    document.getElementById("studentGrade").style.display = "flex";
    document.getElementById("gradeInput").focus();
}

let chooseGrade = ()=>{
    event.preventDefault();
    grade = Number(document.getElementById("gradeInput").value);

    displayCommentOptions();
    document.getElementById("feedbackText").value = generateFeedback();
    document.getElementById("studentGrade").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
}

let reset = ()=>{
    let gitHubComments = document.querySelectorAll("#gitHubComments input");
    for(let i = 0; i < gitHubComments.length; i++){
        gitHubComments[i].checked = false;
    }

    document.getElementById("nameInput").value = "";
    document.getElementById("gradeInput").value = "";
    document.getElementById("feedbackText").value = "";

    let options = document.querySelectorAll(".option");
    for(let i = 0; i < options.length; i++){
        options[i].style.display = "none";
    }
    document.getElementById("chooseModule").style.display = "flex";
}

let copy = ()=>{
    let text = document.getElementById("feedbackText").value;
    navigator.clipboard.writeText(text);
}