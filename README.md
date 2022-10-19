# SkillFactory React - CheckPoint#3
### Team
- Mathías Ezequiel Latrónico
- Rolando Duarte
- Emmanuel Enrique Mombelli
- Tomás Napolitano

### Photo
![img](https://i.ibb.co/f8dF3gz/Skillers.png)

# Introduction
### LibraryApp - Taks
It is an App based on a library of books, where the user will save the information of those books that he visits.
https://library-app-sf-react.vercel.app/
![img](https://i.ibb.co/fHG1CMv/App.png)
# Requeriments
- Create a React project using the CRA CLI.
- Perform a CRUD that allows:
    - Add a book.
    - Delete a book.
    - Update a book.
    - Retrive information from loaded books.
- Use Redux Toolkit for App state management.
- It should be Responsive Design.
- Use library of styles for the contribution of the product.
- Each book must maintain the consistency of the selected language (ES/EN) and contain:
    - Title.
    - Author(s).
    - Year of publication.
    - An image for the cover.
    - A descriptión.
    - ISBN (If available).
- Use the ECMA6 coding standard.
- Desing the UI Mockup for Login and Register.

###### Agile Methodology **SCRUM**
Archieve the organization to carry out the product and comply with:
- Dailies.
- Sprint Planning.
- Team Leader (internal).
- Product Backlog.
- Sprint Review.
- Demo.
 ##### Way of working **Trello**
Each member of the team had to complete the Sprint to carry out the management of the Product Backlog, in this way the members worked on the functionalities of the App and others on the user interface.
![img](https://i.ibb.co/HGYySys/Trello.png)
# Project Creation
- We created a remote repository on **GitHub**.
- Create the application in React:
    ```
    npx create-react-app SkillFactoryReact-LibraryApp
    ```
- The install the following:
    - React Redux:
    ```
    npm install react-redux
    ```
    - Redux Toolkit:
    ```
    npm install @reduxjs/toolkit
    ```
    - React Dom 6:
    ```
    npm install react-router-dom@6
    ```
    - uuidv4:
    ```
    npm install uuid
    ```
- Then each member made a fork of the repository.
### Clone the App.
**Create a folder**, you can designate the name you like.
- Go to GitHub and get the URL by running the following command in a **CMD** console:
```
git clone https://github.com/emma-25/SkillFactoryReact-LibraryApp.git
```
- Once the repository is cloned with the command `cd SkillFactoryReact-LibraryApp`, plus the name of the folder we place ourselves in the project.
- Open a terminal in **VSCode** and run the following command `npm install o npm i` to install the dependencies you will need for your project.
# Start the App
In the terminal of your editor execute `npm start` to be able to visualize it in the browser, by default it will open in the following port `https://localhost:3000`.
### Optional
- Use a Call To Action to request an API and load the books in our App.
- The addition and update of books that are carried out in different routes.
