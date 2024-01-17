# 02 - NODEJS FUNDAMENTALS: FOUNDATIONS AND SETUP

## 2.1 - Node process

- Process refers to the "running instance" of a computer program.

- In the context of nodejs, process refers to a "global object", that doesn't need to be required using a module. we can use it directly.

- Process object in nodejs, refers to the current nodejs program/process that is being executed.

- Since process is an object, it comes with various properties, methods and events that can be used to interact with the program, environment and OS.

- .argv is a property that takes an array of input, which is used to pass inputs to a program directly using cli

## 2.2 - Global object

- It is the parent/top-most namespace object (an object that is used to group and organize related funcationalities under a single, named entity in the program), which is similar to the "window" object provided by the browesers.

- Global scope: variables that aren't decalared with var, const or let become properties of the global object as they are under the gobal scope.

- Global functions: setTimeout() and setIntervals() are such global functions
