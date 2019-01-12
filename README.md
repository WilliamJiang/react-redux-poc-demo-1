Awesome Project
===============


This is a awesome project for React

Quick Start
------------

```bash
 $ npm install -g create-react-app
 $ create-react-app awesomeproject
 $ cd awesomeproject
 $ npm install
 $ npm start
 $ open http://localhost:3000

```

[See Here](http://localhost:3000/)


Steps:
-------
```bash
create-react-app app3
cd app3
git init 
git add .
git commit -m"original version"
git checkout -b step1

// add and update new codes
// check in localhost:3000

git diff --name-only
git add .
git commit -m"step1: done todoApp from reactjs.org."


git checkout -b step2

// componentWillMount -> render -> componentDidMount (REST call, Ajax, Promise) ... componentWillUnMount -> componentDidUnMount
```

````bash
git checkout -b step3
//create folder src/step3
//create js src/step3/App.js

npm install --save redux react-redux prop-types
//or:
yarn add redux react-redux prop-types
```


Reference
-----------


[How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)