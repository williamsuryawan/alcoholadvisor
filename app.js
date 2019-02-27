const express = require("express");
const app = express();
const port = 3000;
// const routerTeacher = require("./routes/teachers");
// const routerSubject = require("./routes/subjects");
// const routerStudent = require("./routes/students")
const routerUser = require("./routes/users")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage
app.use("/homepage",routerUser);
// app.use("/user", routerUser);
//Subject
// app.use("/subject", routerSubject);
//Student
// app.use("/student", routerStudent);


app.listen(port, () => console.log(`listening on port ${port}`));