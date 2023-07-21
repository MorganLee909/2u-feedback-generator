let module14 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. You created an excellent blogging application that is very easy to use and intuitive and met all of the requirments. You showed that you really understand how to create a great application that utilizes a backend.`;
                case "almostPerfect":
                    return `Great work on this assignment ${name}. You created a really great blogging application using ExpressJS and a SQL database. It runs really well and you clearly demonstrated that you have the ability to create more complex applications. This can be a tricky assignment, so congratulations on doing such a great job.`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. I was able to start the application and it works well. There are just a few issues.`;
                case "manyProblems":
                    return `Hey ${name}, I was able to get your project working to some degree, however, there are a lot of problems that need to be fixed.`;
                case "inProgress":
                    return `Hey ${name}, I can see that you are still working on this assignment. You have a good start here, it just needs a bit of time to get everything up and running.`;
                case "notWorking":
                    return `Hey ${name}, you got a good start on this assignment and I can see that you have put some good work into it. Unfortunately I ran into quite a few issues and I was unable to get the application to start.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `You did some really great work on this assignment. You have now created a fully functional web application. This is the first assignment that has all the functionality of a full website, so you should be really happy with what you have created here. Great work on this, keep it up!`;
                case "almostPerfect":
                    return `Again, great work on this assignment, just some minor issues. You have done a really great job on a tough assignment. Keep up the great work!`;
                case "fewProblems":
                    return `Great overall work on this assignment except for the issues mentioned above. This can be a difficult project, so great work on getting this up and running. Keep up the great work!`;
                case "manyProblems":
                    return `You got a good start to this assignment, it just needs a bit more work. Don't be discouraged, this is a rather difficult assignment and the first complete application that you have built. Keep up the work and you will get there.

Don't forget that you can reach out to your instructors if you need help. They are there to help you. Good luck!`;
                case "inProgress":
                    return `You were able to still get some points for the submission and your repo quality.

If you need help with this assignment, make sure that you reach out to your instructors, they are there to help. Keep on with this assignment, it takes a lot of work, this is a hard assignment, but it is worth it in the end. Best of luck to you!
                `;
                case "notWorking":
                    return `You have a good start here, it just needs a bit more work. Don't get discouraged, this is a difficult assignment that many students have trouble with. Just keep working at it and you will get there in no time.

Also, don't forget to reach out to you instructors if you need help with anything, that is what they are there for.`;
            }
        }
    },

    comments: [
        {
            title: "Cannot logout",
            type: "checkbox",
            comment: "The functionality for logging out is not there. When logging out I should be redirected to home, and then I have to sign in again before I can reach the dashboard."
        },
        {
            title: "Bad imports",
            type: "checkbox",
            comment: "Many  of your 'require()' statements are not working and therefore not importing the necessary file, preventing the entire program from running. Ensure that you have the correct path and filename (including capitalization) of the file that you want to import."
        },
        {
            title: "Cannot edit/delete",
            type: "checkbox",
            comment: "You don't have any way for a user to edit or delete their own posts after they have made them."
        }
    ]
}