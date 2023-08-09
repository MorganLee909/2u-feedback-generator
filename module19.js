let module19 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Excellent job on this assignment ${name}. You created a really great working PWA that meets all of the requirements. I am able to write notes that are automatically saved and I can install it locally in order to run it on my machine whether I have an internet connection or not.`;
                case "almostPerfect":
                    return `Amazing work on this one ${name}. You did a really great job creating a working PWA that can be downloaded similarly to native applications, even on mobile! This is a tough assignment, so it is really amazing what you were able to accomplish. Just a few notes:`;
                case "fewProblems":
                    return `Good work on this assignment ${name}. You were able to create a working PWA, which, in my opinion is one of the cooler things on the web. Not only is it a website, but a fully installable mobile application!. You have come a really long way since the first days of your course, this assignment is not trivial. Great job getting this working with only a few mistakes.`;
                case "manyProblems":
                    return `Good work on getting started with this assignment ${name}. I can see that you have put some work into this application. However, there are some problems and some things that need to be fixed or added.`;
                case "inProgress":
                    return `Good start on this assignment ${name}. I can see that you are not done with this yet and it still needs some work.`;
                case "notWorking":
                    return `Hey ${name}, it looks like you got a good start on this assignment, but unfortunately I was unable to get the application to start.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, just great work. This is a really difficult assignment and it can be very challenging to get a working PWA. So you did an excellent job getting this working so well, you should be really proud of how far you have gotten and how much you have already learned. Keep up the great work.`;
                case "almostPerfect":
                    return `Again, great job, it is almost perfect except for what is mentioned above. Keep up the great work!`;
                case "fewProblems":
                    return `Again, just really good work here. This application is a big step toward being a full stack developer, and you did a good job putting it together. Keep up the great work!`;
                case "manyProblems":
                    return `Good start on this, you just need to put a bit more work into it in order to get everything up and working properly. This is a tough assignment, getting used to using a PWA can be a challenging task, so good on you for getting this far.
                    
If you need help, remember to reach out to your instructors, they are there to help you.`;
                case "inProgress":
                    return `Again, good start, you just need to spend some more time getting everything up and running. You still got some points just for the submission and also for the quality and good condition of your repository.
                    
If you need help moving forward with this and getting this working, don't forget to reach out to your instructors. They are there to help you. Good luck!`;
                case "notWorking":
                    return `You have a good start here, you just need to put in a bit of time to get things working properly. Make sure you utilize error messages to help you find any bugs.
                    
Don't forget to reach out to your instructors if you need any help with this assignment, that is what they are there for.`;
            }
        }
    },

    comments: [
        {
            title: "Missing manifest.json",
            type: "checkbox",
            comment: "An issue that you have is the 'manifest.json' file. React should be generating this file when the application is started and serving it to the browser. However, this file is not properly generated, which means that the PWA cannot be installed."
        },
        {
            title: "Missing IndexedDB get/put",
            type: "checkbox",
            comment: "You are missing the GET and PUT methods for IndexedDB. Make sure that you add the code for these methods in your 'database.js' file in order to get the IndexedDB working properly. This is necessary for saving data in the browser itself so that the data persists instead of being an empty file every time that it is opened."
        },
        {
            title: "Cannot be installed",
            type: "checkbox",
            comment: "Your application cannot be installed. This is often caused by either missing a 'manifest.json' file, the IndexedDB not being properly set up, or lacking service workers for the application."
        }
    ]
}