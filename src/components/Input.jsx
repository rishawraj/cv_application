// write css for Input

const Input = (props) => {
  const { label, name, setProp, type, placeholder } = props;

  //   image
  if (type == "file") {
    function handleImage(e) {
      setProp(URL.createObjectURL(e.target.files[0]));
    }
    return (
      <>
        <label htmlFor={name}>{label}</label> <br />
        <input type="file" name={name} onChange={handleImage} />
      </>
    );
  }

  return (
    <>
      <label htmlFor={name}>{label}</label> <br />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => setProp(e.target.value)}
      />{" "}
      <br />
    </>
  );
};

export { Input };
