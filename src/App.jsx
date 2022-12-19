import { useState, useTransition } from "react";
import { Input } from "./components/Input";
import profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john123@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [image, setImage] = useState(profile);

  //! Education
  const [schoolName, setSchoolName] = useState("school name");
  const [subject, setSubject] = useState("Subject");
  const [dateFrom, setDateFrom] = useState("from");
  const [dateTo, setDateTo] = useState("to");

  //! Experience
  const [companyName, setCompanyName] = useState("Google");
  const [position, setPosition] = useState("Sr. Web Developer");
  const [task1, setTask1] = useState("task1");
  const [task2, setTask2] = useState("task2");
  const [task3, setTask3] = useState("task3");

  const [dateFromExp, setDateFromExp] = useState("from");
  const [dateToExp, setDateToExp] = useState("to");

  function setForm(e) {
    e.preventDefault();
    let form = document.querySelector(".form");
    form.classList.add("hide");
  }

  function showForm() {
    let form = document.querySelector(".form");
    form.classList.remove("hide");
  }

  return (
    <>
      <h1>CV Application</h1>
      {/* ================= container ========================= */}

      <div className="container">
        <div className="form no-print" onSubmit={setForm}>
          <h2>General Info</h2>
          <form>
            <Input
              name="Name"
              type="text"
              placeholder="Rishaw Raj Bharti"
              label="Name"
              setProp={setName}
            />
            <Input
              name="Email"
              type="text"
              placeholder="rishaw293@gmail.com"
              label="Email"
              setProp={setEmail}
            />
            <Input
              name="Phone"
              type="tel"
              placeholder="123-45-67890"
              label="Phone"
              setProp={setPhone}
            />
            <Input
              name="profile"
              type="file"
              label="Upolad Profile Image"
              setProp={setImage}
            />
            <hr />
            <h2>Education</h2>
            <Input
              type="text"
              label="School Name"
              name="school-name"
              placeholder="School Name"
              setProp={setSchoolName}
            />
            <Input
              type="text"
              label="Subject"
              name="subject"
              placeholder="Subject"
              setProp={setSubject}
            />
            <Input
              type="date"
              label="from"
              name="date-from"
              setProp={setDateFrom}
            />
            <Input type="date" label="to" name="date-to" setProp={setDateTo} />
            <hr />
            <h2>Experience</h2>
            <Input
              label="Company Name"
              placeholder="Google"
              name="company-name"
              type="text"
              setProp={setCompanyName}
            />
            <Input
              label="Position Title"
              placeholder="senior project manager"
              name="position-title"
              type="text"
              setProp={setPosition}
            />
            <h3>Main Tasks</h3>
            <Input
              label="Task 1"
              placeholder="task 1"
              name="task1"
              setProp={setTask1}
            />
            <Input
              label="Task 2"
              placeholder="task 1"
              name="task2"
              setProp={setTask2}
            />
            <Input
              label="Task 3"
              placeholder="task 1"
              nmae="task3"
              setProp={setTask3}
            />
            <br />

            <Input
              label="Date From"
              type="date"
              name="date-from"
              setProp={setDateFromExp}
            />
            <Input
              label="Date To"
              type="date"
              name="name-to"
              setProp={setDateToExp}
            />
            <hr />
            <button type="submit">submit</button>
          </form>
        </div>

        {/* ================= preview ========================= */}

        <div className="preview">
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
          <img src={image} alt="profile" height="100px" width="auto" />
          <hr />
          <h3>Education</h3>
          <p>{schoolName}</p>
          <p>{subject}</p>
          <p>{dateFrom}</p>
          <p>{dateTo}</p>

          <hr />
          <h3>Experience</h3>
          <p>{companyName}</p>
          <p>{position}</p>
          <p>main tasks</p>
          <ul>
            <li>{task1}</li>
            <li>{task2}</li>
            <li>{task3}</li>
          </ul>
          <p>{dateFromExp}</p>
          <p>{dateToExp}</p>

          <hr />

          <button className="no-print" onClick={(e) => print()}>
            print
          </button>
          <button className="no-print" onClick={showForm}>
            edit
          </button>
        </div>

        {/* ================= preview ========================= */}
        {/*  */}
      </div>
    </>
  );
}

export default App;
