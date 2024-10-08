**Notes for Setup of API server**

https://dev.to/myogeshchavan97/how-to-easily-create-and-host-your-own-rest-api-without-writing-a-single-line-of-code-2np4

start the application by running the npm start command from the terminal
= from the folder where is this app

Mac: cd VSCode_projects/Automation_Testing_League/Automation_Testing_League/users-api-server/

details:
Setup local environment
Create a new folder with the name users-api-server.
Navigate inside the folder from the command line and execute the following command
npm init -y
This will create a package.json file inside your project.

Install the json-server npm package by executing the following command
npm install json-server
Create a new file with the name .gitignore with the entry for node_modules inside it so the node_modules folder will not be pushed to GitHub while pushing the code to the GitHub repository.

Create a new file with the name db.json and add the following contents inside it:
```
{
  "users": [
    {
      "id": 1,
      "name": "David",
      "age": 30
    },
    {
      "name": "John",
      "id": 2,
      "age": 40
    }
  ]
}
```
Open package.json file and add the scripts section inside it:
```
"scripts": {
  "start": "json-server db.json"
}
```
Now, start the application by running the npm start command from the terminal.

You will see the following screen when you access it at http://localhost:3000/

example of scenarios:
https://robotframework-requests.netlify.app/doc/requestslibrary#Status%20Should%20Be