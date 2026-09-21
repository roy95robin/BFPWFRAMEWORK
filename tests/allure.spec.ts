
// Different types of reports in playwright:: 
/*
Playwright support inbuilt reports : 
Html, dot, list and line

Allure report -- advance report. 

:::: installation of allure::: 
1. npm install --save-dev allure-commandline
2. npm install --save-dev allure-playwright
3. add the allure report inside config file. 
         reporter: [['html'],['allure-playwright']],
    :: Allure report folder will be added once you run your testcase for first time. 
    Execute the file atleast for one time. 
    post execution the allure-result folder will get created.
    Open the allure report using below command 
        npx allure serve allure-results

now run the below command in terminal :: 
npx allure generate allure-result --clean-o allure-report
New folder allure report will get created 
copy the history folder from allure report folder and paste it inside the allure-results
for history or trends details.


*/