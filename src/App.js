import { useState } from "react";
import "./index.css";

export default function App() {
  const [hegiht, setHegiht] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(0);
  const lastHeight = hegiht / 100;

  function handleReset() {
    setHegiht("");
    setWeight("");
    setBMI(0);
  }

  function handleCalculate(e) {
    e.preventDefault();
    if (!hegiht || !weight) return alert("Please enter a valid value");
    setBMI(weight / (lastHeight * lastHeight));
  }

  const onHeight = (e) => setHegiht(+e.target.value);
  const onWeight = (e) => setWeight(+e.target.value);

  return (
    <div className="App">
      <Logo />
      <Form
        hegiht={hegiht}
        weight={weight}
        onHeight={onHeight}
        onWeight={onWeight}
        onCalculate={handleCalculate}
      />
      {bmi !== 0 && <Result bmi={bmi} onReset={handleReset} />}
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>📊 BMI Calculator</h1>
    </div>
  );
}

function Form({ hegiht, weight, onHeight, onWeight, onCalculate }) {
  return (
    <form className="form" onSubmit={onCalculate}>
      <label>Height</label>
      <input
        type="number"
        value={hegiht}
        onChange={onHeight}
        placeholder="Kg"
      />

      <label>Weight</label>
      <input
        type="number"
        value={weight}
        onChange={onWeight}
        placeholder="cm"
      />

      <button>Calculate</button>
    </form>
  );
}

function Result({ bmi, onReset }) {
  const textColor = `${bmi > 25 ? "red" : bmi < 23 ? "green" : "orange"}`;

  return (
    <div className="result">
      <p>
        Your BMI is <span style={{ color: textColor }}>{bmi.toFixed(2)}</span>
      </p>
      <p style={{ color: textColor }}>
        {bmi > 25 ? "Bad" : bmi < 23 ? "Good" : "Not bad"}
      </p>
      <button className="btn-reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
