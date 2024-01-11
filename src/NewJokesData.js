export default [
    {
        setup: "Project Structure",
        punchline: "We will begin by discussing the directory structure. We will have 2 directories, the Client and Server directory. The Client Directory will hold the contents of the our React app we setup in the last tutorial and the Server will hold the contents of the of our express server and hold the logic for our API calls to our database."
    },
    {
        setup: "Basic Express Setup",
        punchline: "If you haven't already done so you can install the express-generator with the command: npm install -g express-generator. This is a simple tool that will generate a basic express project with one simple command, similar to create-react-app. It will save us a little bit of time from having to set everything up from scratch."
    },
    {
        setup: "Axios vs Express Router vs React Router",
        punchline: "We use react router to navigate within our app, we use axios to communicate with our express server and we use our express server to communicate with our database."
    },
    {
        setup: "Why Not use an ORM library like Sequelize?",
        punchline: "Preference for directly working with SQL which allows for more control than ORM. More learning resources for SQL than an ORM. ORM skills are not transferable, SQL skills are very transferable."
    }
]