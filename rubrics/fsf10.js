let module10 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great work on this assignment ${name}. You did an amazing job using NodeJS and inquirer to create a really great CLI application that works exactly as expected. Everything was simple, clear and easy to use and generates an SVG logo that looks exactly as it should.`;
                case "almostPerfect":
                    return `Excellent work on this assignment ${name}. You created a great working CLI application that generates really good SVGs. It is good to see that you are getting the hang of using Node and the CLI, as well as classes.`;
                case "fewProblems":
                    return `Good job on this assignment ${name}. You did a really good job creating a working CLI application using NodeJS to generate an SVG. This is a big step because you are now able to use NodeJS, which can be a challenging thing to learn. Here are a few things that could be improved.`;
                case "manyProblems":
                    return `Good work on this assignment ${name}. You created a working CLI that demonstrates that you are comfortable with NodeJS and Inquirer. You did great creating this, though there are some problems.`;
                case "inProgress":
                    return `I can see that you have gotten a start on this assignment, ${name}, but haven't yet finished it. You have added some code to get it going, but it isn't quite working yet.`
                case "notWorking":
                    return `Great start on this assignment ${name}. You have the base of the assignment built out. This is a really difficult assignment and it can be a challenge getting used to using classes. Unfortunately I was unable to generate a logo with the program.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, just a really great job on this assignment. You have displayed that you truly understand how to use NodeJS and Inquirer to accept user input through a CLI. You also kept your repo in a really good state with a great README and and a good commit history. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, excellent work. This is a really great application that you have created and you should really be proud of it. Make sure you keep up the good work and good luck to you!`;
                case "fewProblems":
                    return `As I said previously, you did a great job on this one. You have a good, working CLI application. NodeJS and these concepts are very important to the rest of this course and web development in general, so you have given yourself a good start here. Keep up the great work!`;
                case "manyProblems":
                    return `Again, good job on getting this put together. Getting started with NodeJS can be a daunting task, yet you really did a good job creating a working CLI. This is a challenging assignment, yet you were still able to create a working project. Keep up the good work!`;
                case "inProgress":
                    return `Good job getting a start on this assignment. It just needs some more work to get it running properly. I am sure that it will work great once you put some more time into it.
                    
Make sure that you reach out to your instructors for help if you need it, they are there to help you. Good luck!`;
                case "notWorking":
                    return `You have gotten a good start on this assignment, you just need to fix a few things in order to get the program running properly. Again, this is a tough assignment. 

Make sure that you reach out to your instructors for help if you need it, they are there to help you. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "Jest not in package.json",
            type: "checkbox",
            comment: "You have not added 'jest' to 'scripts.test' in your 'package.json' file. This means that I am unable to simple type in 'npm test' to run all of the tests. Any time that you install/use Jest, you need to make sure that you add that."
        },
        {
            title: "No shape classes",
            type: "checkbox",
            comment: "You are not utilizing JavaScript classes for the different shapes."
        },
        {
            title: "Bad importing",
            type: "checkbox",
            comment: "Some of your 'require()' statements are not properly importing the files. Make sure that you pass in the correct path and filename to 'require()'. Pay attention to folder location as well as capitalization."
        },
        {
            title: "No tests",
            type: "checkbox",
            comment: "Your code does not contain any tests. Be sure to create tests using jest. You should be testing all of the classes, as well as the resulting SVG."
        },
        {
            title: "Tests fail",
            type: "checkbox",
            comment: "The tests that you have are all failing. Make sure that write code that will ensure that your tests are passing."
        },
        {
            title: "Missing 'save-to' directory",
            type: "checkbox",
            comment: "The directory to which you are saving the newly generated SVGs is not in your GitHub repository. This causes the file creation to fail with an error, because it cannot save to a directory that doesn't exist. This is easily fixed by adding that directory. If you have an empty directory, then git will ignore that directory and it won't be uploaded to GitHub, which is often the cause of this issue. You can fix this by adding a '.gitkeep' file in the directory. This is a hidden file that will make sure that git doesn't ignore the directory. This didn't cost you any points, but it is just a good thing to remember."
        }
    ]
}