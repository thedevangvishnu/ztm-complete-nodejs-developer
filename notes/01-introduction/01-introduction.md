# INTRODUCTION TO NODEJS

## 1.1 - What is Nodejs

- Nodejs is a javascript runtime environment that allows to do server-side programming using javascript

- Meaning, our computers can run javascript directly using nodejs, without the need of browsers and their javascript engines.

## 1.2 - How was Nodejs born?

- tradionally, in order to run javascript, we needed to use some sort of browser that had its own javascript engine.

  - v8 for chrome - spider monkey for firefox - javascript core for safari
  - in 2008, chrome with its v8 engine was released and became a game changer. It ran js code really fast.
  - Ryan Dalh took the chrome's v8 engine's code and developed nodejs which was released in 2009.

## 1.3 - What is a runtime

- Runtime is an environment (more technically, it's the "software stack"), that lets us execute our code.

- Nodejs is a javascript runtime environment, meaning an environment in which code written in javascript can be executed.

- Ryan creaeted this environment primarily using v8 engine's c/c++ code and also combined it with "libuv (a multi-platform C library that provides support for async i/o).

- Hence, nodejs could run conventional js but also provided extra features that were out of scope for standard conventional js, such as sending https request or reading from a file.
