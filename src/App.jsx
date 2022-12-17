import { useRef, useState } from "react";
import "./App.css";

// todo form
// todo preview
// todo

function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john123@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);

  function setForm(e) {
    e.preventDefault();
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputPhone.current.value = "";
  }

  return (
    <>
      <h1>CV Application</h1>
      {/* ================= contianer ========================= */}
      <div className="container">
        <div className="form" onSubmit={setForm}>
          <h2>form</h2>
          <form>
            <label htmlFor="Name">Name</label> <br />
            <input
              name="Name"
              type="text"
              placeholder={name}
              ref={inputName}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder={email}
              ref={inputEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="phone">Phone</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={phone}
              ref={inputPhone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
        {/* ================= preview ========================= */}
        <div className="preview">
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        {/* ================= preview ========================= */}
      </div>
    </>
  );
}

export default App;
