let module03 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Excellent job on this assignment ${name}. You create a really good password generator application that displays that you really understand how to use JavaScript. You met all of the requirements in the process and created a very simple to use and effect application.`;
                case "almostPerfect":
                    return `Great work here ${name}. You created a really great password generator using JavaScript. JS can be a bit difficult to get the hang of at first, but you did a really great job on picking it up and creating something great.`;
                case "fewProblems":
                    return `Hey ${name}, good work on this assignment. You created a good password generator that outputs a good password based on the user input. This is a great start in learning to use JavaScript and learning programming in general.`;
                case "manyProblems":
                    return `Hey ${name}, you got a good start on this assignment. I was able to run it and it was indeed generating a password for me. However, there are a few problems.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, great work on this assignment. You did everything perfectly and should be really proud of the great JavaScript application that you have created here. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, really great work here. You created a great application and should really be proud of what you have been able to create after only a few weeks. Keep up the great work!`;
                case "fewProblems":
                    return `Other than those few issues, you did a really great job on this assignment. You clearly have a good understanding of JavaScript already and how to use it to create a great application. Keep up the great work!`;
                case "manyProblems":
                    return `You got a good start here on this assignment, it just needs some more time and effort to make sure that everything is working properly and that all of the bugs are fixed.

If you need help, don't forget to reach out to your instructors. They are there to help you. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "No minimum length",
            type: "checkbox",
            comment: "There is no minimum length for the password. I can set it below 8 and it will still generate the password."
        },
        {
            title: "No maximum length",
            type: "checkbox",
            comment: "There is no maximum length for the password. I can set it above 128 and it will still generate the password."
        },
        {
            title: "Always uses all characters",
            type: "checkbox",
            comment: "The choices that the user makes for which characters they want does not affect the outcome of the generator. No matter which character options I choose, I will receive a mixture of upper/lower case, special characters and numbers."
        },
        {
            title: "Missing prompts",
            type: "checkbox",
            comment: "You are missing some of the password prompts for the user. Remember to prompt the user for length and whether they want upper-case, lower-case, numbers and special characters."
        }
    ]
}