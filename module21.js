let module21 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Excellent work on this assignment ${name}. You have proven that you know really well how to create a frontend application with React, and then pair that with a backend build with Apollo and GraphQL. The application runs well and with no errors and you were able to meet all of the requirements of the assignment. `;
                case "almostPerfect":
                    return `Great work on this assignment ${name}. You created a great full-stack application that works perfectly. I was able to start the server and use the application with no issues whatsoever. I could sign up, login, search and save books. Really great work on this one.`
                case "fewProblems":
                    return `Good work on this assignment ${name}. You have a really good application for searching and saving books. Most everything works exactly as expected with only some small issues.`
                case "manyProblems":
                    return `Hey ${name}. Good job getting this project working. This is probably the most difficult assignment of the course, so you should be really proud that you got this working. There are some issues with it that need to be fixed however.`;
                case "notWorking":
                    return `Hey ${name}, unfortunately I was unable to get the application started due to a number of errors. I can see that you have put a good bit of work in and you did some things very well, but the application just won't start for me.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, great job. This is a really difficult assignment and you got everything just right. You should be proud of what you have created here. Keep up the great work!`;
                case "almostPerfect":
                    return `This was almost perfect except for what was mentioned above. Great work. This is a really difficult and complex assignment, so you should be really happy with how well you have done. Keep up the excellent work!`;
                case "fewProblems":
                    return `Again, really good job on this. This is a very challenging assignment that many students have difficulty with. However, you were able to create a really good working application with GraphQL and the Apollo server. You should be really proud of how much you have accomplished now. Best of luck to you!`;
                case "manyProblems":
                    return `You got a good start on this assignment, there are just a few things that need fixing. Don't be discouraged, this is a really difficult assignment. Good luck and keep up the good work.`;
                case "notWorking":
                    return `It looks like you have a good start here, you just have some issues that are preventing the server from running. This is usually the most difficult assignment for students, so don't get discouraged. It just needs a bit more work to get things running.
                    
Remember that you can always reach out to you instructors for help if you need it. That is what they are there for. Good luck!`
            }
        }
    },

    comments: []
}