let module12 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}. You created a fully functional CLI application with NodeJS and inquirer for managing an organization and their employees. The CLI was simple and easy to use and it met all of the requirements for this assignment.`;
                case "almostPerfect":
                    return `Great work on this assignment ${name}. You created a really good CLI application using NodeJS with Inquirer. You were able to demonstrated that you really understand how to use those technologies and do it in a way that is both intuitive to use and with clean code.`;
                case "fewProblems":
                    return `Great job on this assignment ${name}. This was a tough one and you did a really good job on it. Most things work, with just a few issues.`;
                case "manyProblems":
                    return `You got a pretty good start on this assignment ${name}, I am able to start the application and it works, but there are some issues that I ran into.`;
                case "inProgress":
                    return `Good start on this assignment ${name}. I can see that you put some effort into this and are well on your way to creating a really good CLI application. `;
                case "notWorking":
                    return `Hey ${name}, it looks like you got started on this assignment, but maybe have not been able to complete it. I can see that you put some work into it, but unfortunately I was able to unable get the program to run in order to test it.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, really amazing work here. Everything works exactly as it should and you should be proud of how well you did on this assignment. Keep up the great work!`;
                case "almostPerfect":
                    return `Other than that, amazing job. You really displayed a strong understanding of NodeJS and Inquirer here. Great work, keep it up!`;
                case "fewProblems":
                    return `Overall really good work on this assignment other than a few small issues. It is clear that you understand how to use NodeJS, inquirer and SQL to create a really good, functioning application. Keep up the great work!`;
                case "manyProblems":
                    return `You have a good start on this assignment, it just needs a bit more work to get it into a better state. Keep working on it and I am sure that it will be perfect in no time.
                    
Remember to reach out to your instructors if you need any help, that is what they are there for. Good luck!`;
                case "inProgress":
                    return `Keep working on this and you will have it up and running in no time.
                    
Make sure that you reach out to your instructors if you need any help, that is what they are there for. Good luck!`;
                case "notWorking":
                    return `You have a good start on this assignment, it just needs a bit more work to get it into a working state.

Make sure that you reach out to your instructors if you need any extra help. They are there to help you and can guide you to other resources if you need it. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "User interacts with IDs",
            type: "checkbox",
            comment: "Users of the application should never have to interact with IDs. When you want the user to choose an option such as a department, role or employee, make sure that you display all of the options for them to choose from. Then the application should use the ID in the background to perform the necessary operations."
        }
    ]
}