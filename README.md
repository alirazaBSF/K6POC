
# K6 by Girfana Labs
K6 is an open-source load testing tool for testing the performance of web applications, APIs and microservices.
Tests are written in javascript OR typescript and run in goscript for the faster execution rate.

# Installation
k6 has packages for Linux, Mac, and Windows. Alternatively, you can use a Docker container or a standalone binary.
MacOS using Homebrew: brew install k6

# POC samples
I have created 3 sample tests in this repo SampleGetAPI.js, SamplePostAPI.js and SampleRampingVUs.js

# Run k6 with this command
- k6 run filename.js

OR you can comment out the options function and specify the users and duration within the command:
- k6 run --vus 10 --duration 30s filename.js

# Report
After the test run has completed a html report will be generated and stored in the base folder.