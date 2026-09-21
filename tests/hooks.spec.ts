
// What is hooks: 
/*
Hooks -- special method used to perform setup and teardown process. 
setup -- setting up of process
teardown -- closing of process. 

Different hooks in playwright:: 

1. test.beforeAll() --- it will get executed before any of the testcase (if you have 10 different testcase then beforeAll will get executed only once.)
    Ex: Db connection, initiating logs
2. test.beforeEach() -- it will run once before running each and every testcase 
    if you have 10 testcase then it will  10 time. 
    ex: launch the url 
3. test.afterEach() -- it will run once after every testcase is completed 
    ex: logout 
4. test.afterAll() -- it will get executed only once after all the testcase is completed. 
    ex: report generation, logs genaration, db closer. 


 Order of execution will be as per below : 
  beforeAll >>> beforeEach  >>> afterEach  >>> afterAll

  We are mostly using beforeEach()


*/

import {test,expect} from '@playwright/test'

// execution flow:: 
test.beforeEach(async()=>{
    console.log('Before each');
})
test.afterAll(async()=>{
    console.log('After all');
})
test.beforeAll(async() =>{
    console.log('Before all');
})
test.afterEach(async() =>{
    console.log('after each');
})

test('test1', async() =>{
    console.log('Testcase 1');
})
test('test2', async() =>{
    console.log('testcase2');
})
test('test3',async() =>{
    console.log('Testcase 3');
})