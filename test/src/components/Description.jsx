
export default function Description({index , date,description,amount,deleteHandler}){

    return <>
    <div className="grid grid-cols-11 px-4 py-2 my-2">

    <div className="col-span-3 font-medium">Description: {description}</div>
    <div className="col-span-3 font-medium">Amount: {amount}</div>
    <div className="col-span-3 font-medium">Date: {date}</div>
    <button onClick={()=>deleteHandler(index)}
        className=" col-span-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
    </div>
    </>
}