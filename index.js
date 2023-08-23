let qualityInput = document.getElementById("qualityInput");
let nameInput = document.getElementById("nameInput");
let gradeInput = document.getElementById("gradeInput");
let moduleComments = document.getElementById("moduleComments").children;
let feedbackText = document.getElementById("feedbackText")

let generateFeedback = ()=>{
    let module = getModule();
    let comments = "";
    let commentIndex = 1;

    for(let i = 0; i < moduleComments.length; i++){
        let input = moduleComments[i].children[0];
        switch(moduleComments[i].getAttribute("data-type")){
            case "checkbox":
                if(input.checked){
                    comments += `${commentIndex}) ${module.comments[input.getAttribute("data-idx")].comment}\n\n`;
                    commentIndex++;
                }
                break;
            case "select":
                if(input.value){
                    comments += `${commentIndex}) ${input.value}\n\n`;
                    commentIndex++;
                }
                break;
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
    return `${module.text.introduction(qualityInput.value, nameInput.value)}

${comments}

${module.text.conclusion(qualityInput.value)}

${gradeInput.value}/100
-Central grader, LM`;
}

const changeCourse = ()=>{
    displayCommentOptions(getModule());
    updateText();
}

let displayCommentOptions = (module)=>{
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
                input.onchange = ()=>{updateText()};
                input.setAttribute("data-idx", i);
                label.setAttribute("data-type", "checkbox");
                label.appendChild(input);
                break;
            case "select":
                let select = document.createElement("select");
                select.onchange = ()=>{updateText()};
                select.setAttribute("data-idx", i);
                select.selectedIndex = 0;
                select.onchange = ()=>{updateText()};
                label.setAttribute("data-type", "select");
                label.appendChild(select);

                let option = document.createElement("option");
                select.appendChild(option);

                for(let j = 0; j < module.comments[i].options.length; j++){
                    let option = document.createElement("option");
                    option.value = module.comments[i].options[j].comment;
                    option.textContent = module.comments[i].options[j].title;
                    select.appendChild(option);
                }
                break;
        }
    }
}

const getModule = ()=>{
    let module = `${document.getElementById("course").value}${document.getElementById("module").value}`;

    switch(module){
        case "fsf01": return module01;
        case "fsf02": return module02;
        case "fsf03": return module03;
        case "fsf04": return module04;
        case "fsf05": return module05;
        case "fsf06": return module06;
        case "fsf09": return module09;
        case "fsf10": return module10;
        case "fsf11": return module11;
        case "fsf12": return module12;
        case "fsf13": return module13;
        case "fsf14": return module14;
        case "fsf17": return module17;
        case "fsf18": return module18;
        case "fsf19": return module19;
        case "fsf20": return module20;
        case "fsf21": return module21;
        case "fe04": return moduleFE04;
    }
}

let reset = ()=>{
    let gitHubComments = document.querySelectorAll("#gitHubComments input");
    for(let i = 0; i < gitHubComments.length; i++){
        gitHubComments[i].checked = false;
    }

    document.getElementById("nameInput").value = "";
    document.getElementById("gradeInput").value = "";
    feedbackText.value = "";

    let options = document.querySelectorAll(".option");
    for(let i = 0; i < options.length; i++){
        options[i].style.display = "none";
    }
    document.getElementById("chooseModule").style.display = "flex";
}

let copy = ()=>{
    navigator.clipboard.writeText(feedbackText.value);
}

let updateText = ()=>{
    feedbackText.value = generateFeedback();
}