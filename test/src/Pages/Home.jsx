import { Link } from "react-router-dom";


export default function Home(){
    
    return<>
    <Link to={"/expenses"}> <div className="text-blue-500 underline-offset-1">Click here for Expenses</div> </Link>
    </>
}