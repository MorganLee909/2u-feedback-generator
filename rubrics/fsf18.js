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
            title: "CREATE THOUGHT",
            type: "select",
            options: [
                {
                    title: "ID not saved to user",
                    comment: "When a thought is created, the thought is indeed added to the database. However, the thought is not added to the user's 'thoughts' array. This means that there is no association between a thought and a user, so you don't know which user has shared which thoughts."
                },
                {
                    title: "Incorrect response",
                    comment: "Ensure that any time that you create anything (user, thought, etc.) with a POST request, that the API responds with that thing. This is how the frontend can recieve some of the data created on the backend, such as the ID."
                },
                {
                    title: "User ID in URL",
                    comment: "You are using the incorrect route for thought creation. It should be POST '/api/thoughts'. The user ID should be part of the body of the request because it is a property of the thought. With a proper REST API, the ID of something is always preceded by what it is. '/thoughts/:thoughtId' for example. So passing the user ID in the URL doesn't work in this case."
                },
                {
                    title: "No error, no thought",
                    comment: "Creating a user thought is not working. I am not receiving back any errors, but the thought is not created in the database."
                },
                {
                    title: "Wrong route",
                    comment: "You have an incorrect route for creating a thought. The correct route should be: POST '/api/thoughts'."
                },
                {
                    title: "Username associated",
                    comment: "When creating a thought, you are using the username of the user to find and create the association with the user. You should always use the ID for this, never the username. The ID is the unique identifier for the user."
                }
            ]
        },
        {
            title: "CREATE REACTION",
            type: "select",
            options: [
                {
                    title: "No error, no reaction",
                    comment: "Creating a  reaction to a thought is not working. I am not receiving back any errors, but the reaction is not added to the thought in the database."
                },
                {
                    title: "Wrong route",
                    comment: "You have an incorrect route for creating reactions. The correct route should be POST `/api/thoughts/:thoughtId/reactions'."
                }
            ]
        },
        {
            title: "CREATE FRIEND",
            type: "select",
            options: [
                {
                    title: "Wrong route",
                    comment: "You have an incorrect route for adding a friend to a user. The correct route should be: POST '/api/users/:userId/friends/:friendId'. You need to make sure that you have both the user and the friend ID's so that you can add the correct friend to the correct user. Also, make sure that you pay attention to pluralization as that is a common mistake."
                },
                {
                    title: "PUT",
                    comment: "You are creating friends using a PUT request. This should be a POST request be we are not just adding a data point but create a new association."
                },
                {
                    title: "No error, no friend",
                    comment: "Adding a friend to a user is not working. I am not receiving back any errors, but the user is not added to the friends list of the other user in the database."
                }
            ]
        },
        {
            title: "GET ALL THOUGHTS",
            type: "select",
            options: [
                {
                    title: "Empty object response",
                    comment: "The route for getting all thoughts returns an empty object"
                },
                {
                    title: "Error",
                    comment: "When the route for getting all thoughts is run, there is an error that is thrown. The error is preventing the correct data from being returned from the route."
                }
            ]
        },
        {
            title: "GET SINGLE USER",
            type: "select",
            options: [
                {
                    title: "User nested in array",
                    comment: "When retrieving a single user, the response should be just an object containing the data for that user. You are responding with the user, but that user is nested within an array that should be there."
                }
            ]
        },
        {
            title: "GET ALL: Nested array",
            type: "select",
            options: [
                {
                    title: "Thoughts",
                    comment: "The route for retrieving all thoughts responds with improperly formatted data. This response should just be an array. You are returning an object which then has a 'thoughts' array nested inside of it. Do not nest this array in an object, just respond with the array."
                },
                {
                    title: "Users",
                    comment: "The route for retrieving all users responds with improperly formatted data. This response should just be an array. You are returning an object which then has a 'users' array nested inside of it. Do not nest this array in an object, just respond with the array."
                },
                {
                    title: "Both",
                    comment: "The routes for retrieving all users and all thoughts respond with improperly formatted data. These responses should just be an array. You are returning an object which then has a 'users' or 'thoughts' array nested inside of it. Do not nest these arrays in an object, just respond with the arrays."
                }
            ],
            comment: "The response for getting all thoughts and all users responds with improperly formatted data. Retrieving all objects should simply return an array of those objects. Your route is responding with an object that then contains an array of objects. The array should not be nested in an object and should just be returned by itself."
        },
        {
            title: "UPDATE USER",
            type: "select",
            options: [
                {
                    title: "No route",
                    comment: "You don't have any route for updating the data on a user. The correct route should be: PUT '/api/users/:userId'. Make sure that you are using a PUT request and that it includes the thought ID of the thought that you want to update."
                }
            ]
        },
        {
            title: "UPDATE THOUGHT",
            type: "select",
            options: [
                {
                    title: "Not updating database",
                    comment: "Updating thoughts is not working. After making a PUT request for thoughts, the data in the database is unchanged."
                },
                {
                    title: "Username not updated",
                    comment: "When updating a thought, the text of the thought is updated, but the username is not."
                }
            ]
        },
        {
            title: "DELETE USER",
            type: "select",
            options: [
                {
                    title: "No route",
                    comment: "You don't have any route for deleting users."
                },
                {
                    title: "No user with that ID",
                    comment: "When attempting to delete a user, the server just sends back a message that there is no user with that ID and doesn't delete the user, every time."
                }
            ]
        },
        {
            title: "DELETE THOUGHT",
            type: "select",
            options: [
                {
                    title: "ID remains on user",
                    comment: "When a thought is deleted, the ID of that thought is not removed from the user's 'thoughts' array. This can cause errors when someone tries to retrieve the thoughts of a user, but those thoughts have already been deleted."
                }
            ]
        },
        {
            title: "DELETE REACTION",
            type: "select",
            options: [
                {
                    title: "Wrong route",
                    comment: "You have are using an incorrect route for deleting reactions. It is very import to maintain the correct routes in an API. The correct route to delete a reaction would be: DELETE '/api/thoughts/:thoughtId/reactions/:reactionId'."
                },
                {
                    title: "No error, not deleted",
                    comment: "When attempting to delete a reaction, I receive a response, and no error messages, but the reaction is never removed from the thought."
                }
            ]
        },
        {
            title: "DELETE FRIEND",
            type: "select",
            options: [
                {
                    title: "Error",
                    comment: "An error is created when trying to delete friends from a user. The errors is causing the route to fail and the friend is never removed from the user."
                },
                {
                    title: "No route",
                    comment: "You don't have any route for deleting friends from a user."
                }
            ]
        },
        {
            title: "No friends routes",
            type: "checkbox",
            comment: "Your API doesn't contain any routes for creating/deleting friends."
        },
        {
            title: "No reaction routes",
            type: "checkbox",
            comment: "Your API doesn't contain any routes for creating/deleting reactions to thoughts."
        },
        {
            title: "Controllers not separated",
            type: "checkbox",
            comment: "Your logic needs to be separted from your routes. The routes should be defined in the 'routes' directory which then calls the functions that are defined in the 'controllers' directory."
        },
        {
            title: "BONUS completed",
            type: "checkbox",
            comment: "Excellent work on completing the bonus. When a user is deleted, all of their thoughts are also deleted. This helped make up any points that you lost."
        },
        {
            title: "Reaction defined within thought",
            type: "checkbox",
            comment: "You are defining the thought model within the thought itself. You need to import the reaction schema (don't model it, just export/import the schema). Then you can simply include the reaction schema in the thought with 'reactions: [reactionSchema]'"
        },
        {
            title: "Reaction is a reference",
            type: "checkbox",
            comment: "In your thought models you are creating reactions as just a reference to reactions, however, you should be creating it as a subdocument instead with the reaction fully nested inside of the thought. To do this, you can need to export the reaction schema instead of modeling it. Then import it and use it within the thought model with 'reactions: [ReactionSchema]'."
        }
    ]
}