let module17 = {
    text: {
        introduction: function(quality, name){
            switch(quality){
                case "perfect":
                    return `Excellent work with this regex ${name}. Regex is quite a difficult topic for many to understand, and you created a really great explanation of how it works to help both yourself to understand it better and to help others. The entire tutorial is very clear and well-crafted. Your explanations are concise, yet descriptive and you managed to meet all of the requirements for this assignment.`;
                case "almostPerfect":
                    return `Great work ${name}. You created a really great tutorial on regex. Regex can be one of the more difficult topics in web development, so great work displaying that you have a good understanding of the topic. While this is really great work, there are some minor issues.`;
                case "fewProblems":
                    return `Good job on this assignment ${name}. You created a good regex tutorial using gist to display it in GitHub. Overall it is really good quality and shows that you know how to create good documentation.`;
            }
        },

        conclusion: function(quality){
            switch(quality){
                case "perfect":
                    return `Again, just excellent work on this. You really displayed that you understand how to use regular expressions and also that you are very capable of creating great documentation, which is a critically important skill in software development. Keep up the great work!`;
                case "almostPerfect":
                    return `Again, really great work on this assignment. You have a real talent for documentation, which is one of the more important things in software engineering. Keep up the great work.`;
                case "fewProblems":
                    return `Again, good work. Documentation is a very crucial part of software development. The whole point of the web is to connect people together and to share services. Without good documentation, it would be almost impossible for different services to connect to each, because nobody would know how to use anything created by anybody else. So good job on putting in the effort to create some good documentation.`;
            }
        }
    },

    comments: []
}