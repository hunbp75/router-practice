function Form() {
  return (
    <div className="form">
      <form>
        <label>
          <input type="text" id="name" placeholder="Name:" />
          <input type="email" id="email" placeholder="E-mail:" />
          <input type="date" id="date" placeholder="Date:" />
          <input type="time" id="time" placeholder="Óra, perc:" />
        </label>
        <input type="submit" id="submit" value="Foglalás" />
      </form>
    </div>
  );
}

export default Form;
