#!/bin/bash
cd HW1/
mkdir test_{7,8,9}
cd test_7
touch {11,22,33}.txt {11,22}.json
mkdir test_{10,11,12}
ls -la
mv 11.txt 22.txt /e/QA/HW1/test_8
