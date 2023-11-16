import { useState } from "react";

const Checkout = () => {
    const [inputs, setInputs] = useState({});
    let isSubmit = false;

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      isSubmit = true;
      event.preventDefault();
      alert(inputs.fullName);
    }

  return (
    <div className="Checkout">
      <p>This is to focus on concepts around states and the React lifcecycle</p>

      <form onSubmit={handleSubmit}>
        <p>
          <label>Enter your name:
            <input
              type="text"
              name="fullName"
              value={inputs.fullName || ""}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>Enter your email address:
            <input
              type="text"
              name="emailAddress"
              value={inputs.emailAddress || ""}
              onChange={handleChange}
            />
          </label>
        </p>
        <input type="submit" />
      </form>
      {isSubmit && <p>This person is called {inputs.fullName} and their email address is: {inputs.emailAddress} </p>}
    </div>
  );
}

export default Checkout;
