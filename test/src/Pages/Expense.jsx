import { useMemo, useState } from "react";
import Input from "../components/Input";
import Description from "../components/Description";
import Button from "../components/Button";


export default function () {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [value, setValue] = useState([]);
    const [error, setError] = useState("");


    function deleteHandler(index) {
        const removeItem = value.slice(0, index).concat(value.slice(index + 1))
        setValue(removeItem);
    }

    function onClickHandler() {
        if (!description || !amount) {
            return setError("Please fill in the description and amount fields");
        }
        const newItem = { description, amount, date };
        setValue(prevValue => [...prevValue, newItem]);
        setDescription('');
        setAmount('');
        setDate('');
        setError('');
    }

    const totalExpenses = useMemo(() => {
        return value.reduce((total, expense) => total + parseInt(expense.amount), 0);
    }, [value])


    return <>

        <div className="flex justify-center flex-col items-center  bg-slate-400 w-full h-screen">

        <div className="text-4xl font-bold my-2">Expense Calculator</div>

            <div className=" grid grid-cols-11 gap-x-8 border-2 h-28 border-black rounded-t-lg w-2/3 p-4 bg-slate-300 ">

                <div className="col-span-3" >

                    <Input
                        placeholder={"Description"}
                        type={"text"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-span-3">
                    <Input
                        placeholder={"Amount"}
                        type={"number"}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="col-span-3">
                    <Input
                        placeholder={"Date"}
                        type={"date"}
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>


                <div className="flex justify-start col-span-2" >
                    <Button
                        value={"Add Expense"}
                        onClick={onClickHandler} />

                </div>
                <div className="col-span-4">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <div className=" border-2 border-black h-1/2 w-2/3 overflow-y-auto bg-slate-300 ">

                {value.map((val, index) => <Description
                    key={index}
                    index={index}
                    amount={val.amount}
                    description={val.description}
                    date={val.date}
                    deleteHandler={deleteHandler} />)}
            </div>

            <div className="flex justify-center gap-2 border-2 border-black rounded-b-lg bg-slate-300 w-2/3">
                <div className="font-bold">Total Expense: </div>
                <div className="font-bold">{totalExpenses}</div>
            </div>
        </div>

    </>
}
