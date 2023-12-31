let module11 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Great job creating this note taking application ${name}. You created a really great application that works perfectly. I am able to save notes that persist when I close the page. The application looks great and is really easy to use.`;
                case "almostPerfect":
                    return `Hey ${name}, you did a really amazing job on this assignment. The application functions really well and does a great job at meeting the requirements. There are just a few small issues.`;
                case "fewProblems":
                    return `Great job on this assignment ${name}. You created a good note taking application that displays your ability to work with an ExpressJS backend. You have just a few problems.`;
                case "manyProblems":
                    return `You have a really good start on this assignment ${name}. I am able to start the application and it runs without errors. However, there are some issues that need to be resolved.`;
                case "inProgress":
                    return `Hey ${name}. It looks like this project is still in progress and not yet in a working state. You were able to still get some points just for the submission and the quality of your repo.`;
                case "notWorking":
                    return `You have a good start on this assignment ${name}, but unfortunately I was unable to properly run the application in order to test it due to some errors.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, really good job on this. You should be proud of what a great application you have created. You really demonstrated a strong understanding of Node and ExpressJS. Keep up the great work.`;
                case "fewProblems":
                    return `Overall really good work on this assignment. You created a working note taker that displays that you know how to use ExpressJS to create a backend and link that to a working frontend. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, really great work here. You created a working application with a backend served from ExpressJS. Getting started with the backend can be really difficult, so you should be proud of how well you have done here. Keep up the great work.`;
                case "manyProblems":
                    return `If you fix those issues mentioned above, then you could have a really good working application here, it just takes a bit more time. Don't get too frustrated with this one, it is challenging as it is your first experience with a full ExpressJS server.
                    
If you need help, make sure that you reach out to your instructors, that is what they are there for. Good luck!`;
                case "inProgress":
                    return `You have a good start here, just keep working at it and you will have it completed in no time.
                    
Don't forget to reach out to your instructors if you need any help, that is what they are there for. Good luck!`;
                case "notWorking": return `Again, you have a good start here, you just need to fix some bugs and get somethings working properly so that the application will work as intended. Getting the hang of Node and Express can be a real challenge, so don't worry if you are having trouble right now, that just means that you are like everybody else. You will master it over time with practice and just experimenting with things.
                
If you need help, make sure that you reach out to your instructors. They are there to help you.

Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "No IDs",
            type: "checkbox",
            comment: "Your application is not creating a unique ID for each note that is created. The unique ID is the way that you should be able to access specific notes to view them or delete them. Because two notes can have the same title and content, you have to have an ID for each one. It is best to use an NPM package for creating a unique ID, such as 'uuid', or 'crypto'. Personally, I like to use 'const uuid = require('crypto').randomUUID' since this is a node-native package and you don't have to install anything. Then you can just call 'uuid()' which returns a new ID whenever you need it. "
        },
        {
            title: "Cannot view previous notes",
            type: "checkbox",
            comment: "Users are unable to view previously saved notes in the application. Ensure that when a note is clicked on, it displays that note on the main editor. Save the ID of the note to the element that you are clicking on, then fetch the note with that ID to display it on the page."
        },
        {
            title: "Completed bonus",
            type: "checkbox",
            comment: "Excellent work on completing the bonus, I am able to delete notes that I have previously created in the application. This got you some extra points to help make up for any lost."
        },
        {
            title: "No save button",
            type: "checkbox",
            comment: "The main issue that you have in your application is that there is no way to save notes. After typing in a new note, no option appears for me to save the note. This, of course, limits all of the other functionality of the application. Make sure that you display a save button for the user to save the note."
        },
        {
            title: "Non-unique IDs",
            type: "checkbox",
            comment: `While you are creating new notes in the databse file, you are not creating unique IDs for each note. Each note should have its own ID so that they can be easily referenced. I personally prefer using the Node-native 'crypto' library. You can use this by importing it with 'const uuid = require("crypto").randomUUID;' Then you can just call the function 'uuid()' to create a unique ID.`
        }
    ]
}