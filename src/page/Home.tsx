import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("0");
  const [preValue, setPreValue] = useState(0);
  const [toggleMode, setToggleMode] = useState(false);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const handleNumberClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value == "0") {
      setValue("");
    }
    let btnValue = (e.target as HTMLButtonElement).dataset.value;

    if (value.includes(".") && btnValue == ".") {
      return;
    }
    if (toggleMode) {
      setPreValue(Number.parseFloat(value));
      setValue(btnValue ?? "0");
      setToggleMode((toggle) => !toggle);
    } else {
      setValue((value) => value + btnValue);
    }
  };
  const handleOperatorClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    let operator = (e.target as HTMLButtonElement).dataset.operator;

    if (currentOperator == null) {
      setCurrentOperator(operator ?? null);
      setToggleMode((toggle) => !toggle);
    } else {
      console.log(operator, currentOperator);
      switch (currentOperator) {
        case "+":
          setValue((value) =>
            (preValue + (Number.parseFloat(value) || 0)).toString()
          );
          break;
        case "-":
          setValue((value) =>
            (preValue - (Number.parseFloat(value) || 0)).toString()
          );
          break;
        case "*":
          setValue((value) =>
            (preValue * (Number.parseFloat(value) || 0)).toString()
          );
          break;
        case "/":
          setValue((value) =>
            (preValue / (Number.parseFloat(value) || 0)).toString()
          );
          break;
        default:
          break;
      }
      setCurrentOperator(operator ?? null);
      setToggleMode((toggle) => !toggle);
    }
  };
  function formatNumber(num: number) {
    const decimalPart = num.toString().split(".")[1];

    if (Number.isInteger(num)) {
      return num.toString(); // Return as integer
    } else {
      let count = decimalPart.length;
      return num.toFixed(count); // Return as float with 4 decimal points
    }
  }
  function toggleNumberSign() {
    let num = Number.parseFloat(value);
    if (num >= 0) {
      setValue((value) => `-${value}`);
    } else {
      setValue((value) => value.substring(1));
    }
  }
  function handlePercentageClicked() {
    setValue((value) => (Number.parseFloat(value) / 100).toString());
  }

  return (
    <div className="w-full  flex flex-col h-full items-center justify-center ">
      <div className="w-full min-h-screen flex flex-col items-center gap-12 justify-center  ">
        <div className="w-full  flex flex-col py-28 px-14 bg-[rgba(255,253,228,255)] max-w-sm shadow-lg ">
          <div className="w-full h-20 bg-blue-200 flex justify-end items-center p-2 rounded-md  border-2 border-blue-300  shadow-md">
            <span className="text-4xl font-bold text-right text-white w-full ">
              {formatNumber(Number.parseFloat(value))}
            </span>
          </div>
          <div className="grid-cols-4 grid  gap-2 pt-8 ">
            <button
              className="font-bold text-zinc-700  px-6 py-4 bg-[rgba(254,248,197,255)] rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg  text-lg items-center justify-center flex "
              onClick={() => {
                if (value == "0") {
                  setPreValue(0);
                  setCurrentOperator(null);
                }
                setValue("0");
              }}
            >
              {value !== "0" ? "C" : "AC"}
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"-/+"}
              onClick={toggleNumberSign}
            >
              -/+
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"%"}
              onClick={handlePercentageClicked}
            >
              %
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"/"}
              onClick={handleOperatorClicked}
            >
              ÷
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"7"}
              onClick={handleNumberClicked}
            >
              7
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"8"}
              onClick={handleNumberClicked}
            >
              8
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"9"}
              onClick={handleNumberClicked}
            >
              9
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]   rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"*"}
              onClick={handleOperatorClicked}
            >
              x
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"4"}
              onClick={handleNumberClicked}
            >
              4
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)] rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"5"}
              onClick={handleNumberClicked}
            >
              5
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex "
              data-value={"6"}
              onClick={handleNumberClicked}
            >
              6
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]   rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"-"}
              onClick={handleOperatorClicked}
            >
              -
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"1"}
              onClick={handleNumberClicked}
            >
              1
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"2"}
              onClick={handleNumberClicked}
            >
              2
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"3"}
              onClick={handleNumberClicked}
            >
              3
            </button>
            <button
              className="font-bold text-black px-6 py-2 bg-[rgba(254,248,197,255)]   rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"+"}
              onClick={handleOperatorClicked}
            >
              +
            </button>
          </div>
          <div className="grid-cols-3 grid gap-2 pt-2">
            <button
              className="font-bold text-black px-2 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"0"}
              onClick={handleNumberClicked}
            >
              0
            </button>
            <button
              className="font-bold text-black px-2 py-2 bg-[rgba(255,208,208,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-value={"."}
              onClick={handleNumberClicked}
            >
              .
            </button>
            <button
              className="font-bold text-black px-2 py-2 bg-[rgba(255,204,0,255)]  rounded-md border-2 border-[rgba(245,167,172,255)] shadow-lg text-lg items-center justify-center flex"
              data-operator={"="}
              onClick={handleOperatorClicked}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
