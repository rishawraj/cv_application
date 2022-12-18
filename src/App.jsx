import { useRef, useState } from "react";
import profile from "./assets/profile.jpg";
import "./App.css";

// todo form
// todo preview
// todo

function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john123@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [image, setImage] = useState(profile);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);
  const inputImage = useRef(null);

  function setForm(e) {
    e.preventDefault();
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputPhone.current.value = "";
    inputImage.current.value = "";
    let form = document.querySelector(".form");
    form.classList.add("hide");
  }
  function showForm() {
    let form = document.querySelector(".form");
    form.classList.remove("hide");
  }

  function handleImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <h1>CV Application</h1>
      {/* ================= contianer ========================= */}
      <div className="container">
        <div className="form no-print" onSubmit={setForm}>
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
            <label htmlFor="image">upload image</label> <br />
            <input type="file" onChange={handleImage} ref={inputImage} />
            <br />
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
        {/* ================= preview ========================= */}
        <div className="preview">
          <button className="no-print" onClick={showForm}>
            edit
          </button>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
          <img src={image} alt="profile" height="150px" width="auto" />
          <br />
          <button className="no-print" onClick={(e) => print()}>
            print
          </button>
        </div>
        {/* ================= preview ========================= */}
      </div>
    </>
  );
}

export default App;
