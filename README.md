grover-samples
==============

samples to demonstrate grover test runner

```
➜  grover-samples git:(master) npm i
➜  grover-samples git:(master) npm run-script test

> grover-samples@0.0.1 test /Users/stanleyn/Projects/stanleyhlng/git/grover-samples
> grover test/lib/*.test.html --outfile artifacts/test/results.tap --tap

Starting Grover on 1 files with PhantomJS@1.9.7
  Running 15 concurrent tests at a time.
✔ [User Test Suite]: Passed: 5 Failed: 0 Total: 5 (ignored 0) (0.045 seconds)
Writing files in TAP format to: artifacts/test/results.tap
----------------------------------------------------------------
✔ [Total]: Passed: 5 Failed: 0 Total: 5 (ignored 0) (0.045 seconds)
  [Grover Execution Timer] 1.385 seconds
  
➜  grover-samples git:(master) cat artifacts/test/results.tap
1..10
#Begin testcase User(0 failed of 5)
ok 1 - should return true
ok 2 - should instantiate Y.User object
ok 3 - should return "Stanley" in the first name
ok 4 - should return "Ng" in the last name
ok 5 - should return "stanleyn@yahoo-inc.com" in the email
#End testcase User
```
