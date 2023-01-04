import React from 'react'
import './calculator.css'
import { useState, useEffect } from 'react';
import commafy from '../../helpers/commafy';
import Button from '../../components/buttons/Button';


const Calculator = () => {

    const [timer, setTimer] = useState(new Date());
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);


    useEffect(() => {
        setTimer(new Date());
    }, [new Date().getMinutes()]);




    const handleButtonPress = content => () => {
        const num = parseFloat(value);

        if (content === "AC") {
            setValue("0");
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content === "+/-") {
            setValue((num * -1).toString());
            return;
        }

        if (content === "%") {
            setValue((num / 100).toString());
            setMemory(null);
            setOperator(null);
            return;
        }

        if (content === ".") {
            if (value.includes(".")) return;

            setValue(value + ".");
            return;
        }

        if (content === "+") {
            if (operator !== null) {
                if (operator === "+") {
                    setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                    setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                    setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("+");
            return;
        }
        if (content === "−") {
            if (operator !== null) {
                if (operator === "+") {
                    setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                    setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                    setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("−");
            return;
        }
        if (content === "×") {
            if (operator !== null) {
                if (operator === "+") {
                    setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                    setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                    setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("×");
            return;
        }
        if (content === "÷") {
            if (operator !== null) {
                if (operator === "+") {
                    setMemory(memory + parseFloat(value));
                } else if (operator === "−") {
                    setMemory(memory - parseFloat(value));
                } else if (operator === "×") {
                    setMemory(memory * parseFloat(value));
                } else if (operator === "÷") {
                    setMemory(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("÷");
            return;
        }

        if (content === "=") {
            if (!operator) return;

            if (operator === "+") {
                setValue((memory + parseFloat(value)).toString());
            } else if (operator === "−") {
                setValue((memory - parseFloat(value)).toString());
            } else if (operator === "×") {
                setValue((memory * parseFloat(value)).toString());
            } else if (operator === "÷") {
                setValue((memory / parseFloat(value)).toString());
            }
            setMemory(null);
            setOperator(null);
            return;
        }

        if (value[value.length - 1] === ".") {
            setValue(value + content);
        } else {
            setValue(parseFloat(num + content).toString());
        }
    };



    const n = 5;
    return (
        <section className='main'>
            <div className='app'>
                <div className='header'>
                    <div className='left'>
                        <p className='bt-1'>
                            <i className="fa fa-circle"></i>
                        </p>
                        {[...Array(n)].map((e, i) =>
                            <p className='bt-2'>
                                <i class="fa fa-circle" key={i}></i>
                            </p>)}
                        <p className='network'>
                            TELUS
                        </p>
                        <p className='Wifi'>

                            <i class="fa fa-wifi"></i>
                        </p>
                    </div>
                    <div className='middle'>
                        {timer
                            .getHours()
                            .toString()
                            .padStart(2, "0")}
                        :
                        {timer
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}PM
                    </div>
                    <div className='right'>
                        <p className='blutooth'>
                            <i class="fa fa-bluetooth"></i>
                        </p>
                        <p className='blutooth'>
                            <i >100%</i>
                        </p>
                        <p className='blutooth'>
                            <i class="fa fa-battery-full"></i>
                        </p>
                    </div>
                </div>
                <div className="display">{commafy(value)}</div>

                <div className="buttons">
                    <Button
                        onButtonClick={handleButtonPress}
                        content="AC"
                        type="function"
                    />
                    <Button onButtonClick={handleButtonPress} content="+/-" type="function" />
                    <Button onButtonClick={handleButtonPress} content="%" type="function" />
                    <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
                    <Button onButtonClick={handleButtonPress} content="7" />
                    <Button onButtonClick={handleButtonPress} content="8" />
                    <Button onButtonClick={handleButtonPress} content="9" />
                    <Button onButtonClick={handleButtonPress} content="×" type="operator" />
                    <Button onButtonClick={handleButtonPress} content="4" />
                    <Button onButtonClick={handleButtonPress} content="5" />
                    <Button onButtonClick={handleButtonPress} content="6" />
                    <Button onButtonClick={handleButtonPress} content="−" type="operator" />
                    <Button onButtonClick={handleButtonPress} content="1" />
                    <Button onButtonClick={handleButtonPress} content="2" />
                    <Button onButtonClick={handleButtonPress} content="3" />
                    <Button onButtonClick={handleButtonPress} content="+" type="operator" />
                    <Button onButtonClick={handleButtonPress} content="0" />
                    <Button onButtonClick={handleButtonPress} content="." />
                    <Button onButtonClick={handleButtonPress} content="=" type="operator" />
                </div>
            </div>
        </section>
    )
}

export default Calculator