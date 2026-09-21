
// Understanding Github actions:: 

/*
Github/bitbucket/gitlab == these are used for version control and CI/CD pipeline

Version control tools are used to manage the changes in the code and keep track of these changes. 

github/bitbucket are the one mostly used by tester. 
Gitlab is web based version control used by Devops pipeline setup and by dev team. 


>> Download git from the browser. 
>> Create an account on the github. 

// Assume there is no branch present in the github repository:: 
1. Login to github >> Create new repository 
2. Open the terminal in the vs and perform below actions
    > git init
    > git add .
    > git commit -m "first commit"
    > git branch -M main
    > git remote add origin https://github.com/roy95robin/BFPWFRAMEWORK.git
    > git push -u origin main (push all the chnages to the main branch)

    // There is already and github account created and you need to clone it. 
    Main branch and your local branch 
    Local branch >> main branch >> develop branch 

When branch is already created follow the below steps:: 
1. clone the repository in your local system. 
    git clone <repository url>
    git clone https://github.com/roy95robin/BFPWFRAMEWORK.git
2. After clone is completed, we need to install below dependencies
    npm install
    npm init playwright
3. Now make the changes to your local system and push the code to the repo. 
    **** you never push code to main/develop branch directly. 
    First create the new branch inside the local system using below commands:: 
    git checkout -b TestPwFrameWork
4. check if the branch is created or not using below command 
    git branch
5. Now make some changes to the code and push the updated code. 
6. git status -- to check the status of the file. 
7. git add . 
8. git commit -m "new changes"
9. git push 
on the above line you will get one recommended command to use. 






*/