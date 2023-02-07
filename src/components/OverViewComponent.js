import { useState } from 'react';
import TransActionForm from './TransActionForm';

const OverViewComponent = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow] = useState(false);
    return ( 
        <>
        <div className="fSection">
            <p className="Boxs">Balance : {income - expense}</p>
            <button className={`btn ${isShow &&"cancel" }`} onClick={()=>setIsShow((prevState)=> !prevState )}> {isShow ? "Cancel" : "Add"}</button>
        </div>
        {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow} />}
        <div className="tSection">
            <div className="Boxs expenseBox">Expense <span>{expense} $</span> </div>
            <div className="Boxs incomeBox">Income <span>{income} $</span></div>
        </div>
        </>
     );
}
 
export default OverViewComponent;