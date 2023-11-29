let moduleFE03 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Amazing work on this assignment ${name}. You created a really great page that does a great job showing your skills with HTML and CSS and you did a great job integrating bootstrap within all this. This is a really great step toward making really amazing frontend applications. The skills that you have displayed here are the foundation of everything else that you will do on the web.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return "Keep up the great work. If you keep working as hard as you clearly did on this assignment, then you will be a great front-end develop in no time. You have a great grasp on the basics of the web already, and you can only get better from here. Good luck!"
            }
        }
    },

    comments: []
}