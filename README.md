# Internship

A place for students and employers to interact and efficiently help each other gain employement or the right employees depending on the user's status

*In development*

Installation
----

Clone the repository:

```
git clone git@github.com:cwborion/InternshipApp.git
```

Navigate to the InternshipApp directory:

```
cd InternshipApp
```

Install the dependencies:

```
npm install
```

Open another tab in the terminal or command line and in that tab navigate to the server directory to run the server:

```
cd server
```

Run command to run server:

```
node server.js
```

Once server is running, navigate to other window in terminal that is in InternshipApp directory and run in browser:

```
npm start
```

Direct your browser to **localhost:3000**

*Authentication is not yet functional. For this reason in order to navigate and experience CRUD functionality, click on Employer button on the login page. --> you may create an employer account from there --> If you use the navigation bar on the top left and go to the Dashboard page, you can see a button prompting you to create a job post --> after you fill out the form to create a job post, you will see it displayed on the employer dashboard page  --> from there you can easily update or delete job postings as you desire. More complexed functionality linking the students and employers, as well as better state management via redux and authentication are still in the process of being integrated.*