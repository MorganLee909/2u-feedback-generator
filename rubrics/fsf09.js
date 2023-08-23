let module09 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}. You created a fully functional CLI application that creates a great markdown file for users to use in their own repositories.

All of the requirements were met in this assignment. The resulting README not only meets the requirements but looks really great as well and is very easy to use and understand.`;
                case "almostPerfect":
                    return `Excellent work on this assignment ${name}. You were able to created a really good CLI application that requests data from the user in a simple, easy to use manner and creates a great looking README. There are just a few minor problems.`
                case "fewProblems":
                    return `Really great work on this assignment ${name}. You created a really good CLI application that creates a good README file for any repo. Just a few issues that need to be fixed.`;
                case "manyProblems":
                    return `Hey ${name}, good start on this assignment. You were able to create a working CLI application that generates a markdown file to be used as a README. However, there are some requirements that are missing.`;
                case "inProgress":
                    return `Hey ${name}, it looks like you are still working on this assignment. I can see that you have gotten a good start with some of the code, but it isn't fully functional yet.`
                case "notWorking":
                    return `Hey ${name}, unfortunately I was unable to get your program running due to errors. I tried to fix a few of them to get it working, but I encountered several that just kept preventing it from working.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, really great work on this project. You created a very great CLI and a great README file. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, great work other than small mistakes. You should really be proud of what you have created here. Both working with a CLI and generating files with text can be a real challenge, and you nailed it. Keep up the great work.`;
                case "fewProblems":
                    return `Again, great work. You displayed that you clearly understand how to create a working application using NodeJS and Inquirer. This is the first step towards creating full, modern applications. Keep up the good work!`;
                case "manyProblems":
                    return `You got a good start here, it just needs some work to get everything working properly and meet all of the requirements for this assignment.
                    
Be sure to reach out to your instructional staff if you need help with anything, that is what they are there for. Good luck!`;
                case "inProgress":
                    return `You have a good start on this project, keep up and you will have it done in no time. You are still getting some points for submitting, the quality of your repo and some of the work that you have already done.
                    
Don't forget to reach out to your instructors if you need any help, that is what they are there for. Good luck!`
                case "notWorking":
                    return `If you are having trouble with this assignment, make sure that you reach out to your instructors, they are there to help you. They are also able to guide you to more resources that can help you with this assignment, or with general problems that you may be having.

Best of luck to you!`;
            }
        }
    },

    comments: [
        {
            title: "No table of contents",
            type: "checkbox",
            comment: "You are missing your table of contents. You need to have a table of contents with a link that goes to each section of the generated README."
        },
        {
            title: "No contact section",
            type: "checkbox",
            comment: "You need to make sure that the generated README has a contact section that contacts both a mailto link with an email and a link to their GitHub."
        },
        {
            title: "Table of contents doesn't link",
            type: "checkbox",
            comment: "While you have a good table of contents, it does not link to the different parts of the README. Make sure that the table of contents works as links."
        },
        {
            title: "No badge",
            type: "checkbox",
            comment: "You are missing the required badge for the generated README."
        }
    ]
}