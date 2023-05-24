# Lab 8 - Starter

- Question 1: I would fit the automated tests within a github action that runs whenever code is pushed. Doing this, instead of waiting till end of developement or doing tests manually, we are able to establish a robust testing process that ensures consistent and reliable code quality *throughout* our Recipe project development pipeline (instead of just at the end or doing tests that take extra time).
- Question 2: No
- Question 3: Units tests wouldn't be best for the message feature. I wouldn't use it because the message feature performs multiple functions: read and write. As such, with a unit test, we wouldn't be able to test how these individual components interact with each other on an application/feature level. 
- Question 4: I would use unit tests here since it tests one very specific function: capping the length of a message to 80 chars.