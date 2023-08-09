let module18 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect": 
                    return `Amazing work on this assignment ${name}. You created an API that works perfectly according to the parameters provided to you. I was able to run the server with no errors and then make requests to every single API endpoint. Also without errors. This is a very difficult assignment that many struggle with, so you should be proud that you did so well on this one.`;
                case "almostPerfect":
                    return `Excellent work on this assignment ${name}. You create a really great, working API using ExpressJS and a NoSQL database. This is a pretty difficult assignment, so you should be really proud of what you have created. Almost everything works exactly as expected, with just minor issues.`;
                case "fewProblems":
                    return `Hey ${name}, great work on this assignment. You created a really good API with only a few issues. I was able to start the server with no problem and most of the routes worked great and exactly as expected. This is an especially difficult assignment, so you should be proud of what you have done here. There are a few things that could be fixed though.`;
                case "manyProblems": 
                    return `Hey ${name}, you got a good start on this assignment. You created a working API and I was able to start the server, and it was listening for many different routes. However, there are some problems with the assignment:`;
                case "inProgress":
                    return `Hey ${name}, it appears that you are still working on this assignment. You have some starter code, but the main functionality isn't there yet.`;
                case "notWorking":
                    return `Hey ${name}, unfortunately I was unable to get your API working. When I tried to start it, I ran into a series of errors that prevented the program from starting up.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, really good job on this assignment. You created a really great API and you met all of the requirements. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, you did a really good job on this one. Other than what was mentioned above, this is almost perfect. Keep up the great work.`;
                case "fewProblems":
                    return `Overall great job on this assignment other than a few bugs. You really did a great job showing that you can create a great API with ExpressJS and MongoDB. Keep up the great work!`;
                case "manyProblems":
                    return `Overall you really did a pretty good job. You got the server and API running, which can be a real challenge, there are just some bugs and other issues that need fixing. Good work on this assignment, keep working on it and you will have it perfect in no time.

And remember to reach out to your instructors if you need any help, that is what they are there for. Good luck!`;
                case "inProgress":
                    return `You have done a good job getting this assignment started, it will just take a bit more work to get it fully functional. This is a challenging assignment, so don't get discouraged.
                    
Always remember to reach out to your instructors for help if you need it, that is what they are there for.`
                case "notWorking": 
                    return `This is a difficult assignment, so don't be too concerned about having trouble with it, it is normal. The code is present, you just need to work out some of the bugs to get it up and working properly.

Remember to reach out to your instructors if you need any help with this assignment, they are there to help you. Good luck!`;
            }
        }
    },

    comments: [
        {
            title: "Thought created, but not added to user",
            type: "checkbox",
            comment: "When a thought is created, the thought is indeed added to the database. However, the thought is not added to the user's 'thoughts' array. This means that there is no association between a thought and a user, so you don't know which user has shared which thoughts."
        },
        {
            title: "Association created through username",
            type: "checkbox",
            comment: "When creating a thought, you are using the username of the user to find and create the association with the user. You should always use the ID for this, never the username. The ID is the unique identifier for the user."
        },
        {
            title: "Deleted thought not removed from user",
            type: "checkbox",
            comment: "When a thought is deleted, the ID of that thought is not removed from the user's 'thoughts' array. This can cause errors when someone tries to retrieve the thoughts of a user, but those thoughts have already been deleted."
        },
        {
            title: "CREATE THOUGHT: incorrect response",
            type: "checkbox",
            comment: "Ensure that any time that you create anything (user, thought, etc.) with a POST request, that the API responds with that thing. This is how the frontend can recieve some of the data created on the backend, such as the ID."
        },
        {
            title: "GET ALL: Nested array",
            type: "select",
            options: [
                {
                    title: "Thoughts",
                    value: "thoughts",
                    comment: "The route for retrieving all thoughts responds with improperly formatted data. This response should just be an array. You are returning an object which then has a 'thoughts' array nested inside of it. Do not nest this array in an object, just respond with the array."
                },
                {
                    title: "Users",
                    value: "users",
                    comment: "The route for retrieving all users responds with improperly formatted data. This response should just be an array. You are returning an object which then has a 'users' array nested inside of it. Do not nest this array in an object, just respond with the array."
                },
                {
                    title: "Both",
                    value: "both",
                    comment: "The routes for retrieving all users and all thoughts respond with improperly formatted data. These responses should just be an array. You are returning an object which then has a 'users' or 'thoughts' array nested inside of it. Do not nest these arrays in an object, just respond with the arrays."
                }
            ],
            comment: "The response for getting all thoughts and all users responds with improperly formatted data. Retrieving all objects should simply return an array of those objects. Your route is responding with an object that then contains an array of objects. The array should not be nested in an object and should just be returned by itself."
        },
        {
            title: "BONUS completed",
            type: "checkbox",
            comment: "Excellent work on completing the bonus. When a user is deleted, all of their thoughts are also deleted. This helped make up any points that you lost."
        }
    ]
}