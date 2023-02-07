import { useState } from 'react';
import { useEffect } from 'react';

const TransActionComponent = (props) => {

    const [searchItem,setSearchItem] = useState("");
    const [filteredTnx,setFilteredTnx] = useState(props.transactions);
    
    const filterTransactions =(search)=>{
        if(!search || search ==="" ){
            setFilteredTnx(props.transactions);
            return;
        }
    const filtered=  props.transactions.filter((t)=> t.desc.toLowerCase().includes(search.toLowerCase()));
       setFilteredTnx(filtered);
    };

    const changeHandler=(e)=>{
        setSearchItem(e.target.value);
        filterTransactions(e.target.value);
    };

    useEffect(()=>{
        filterTransactions(searchItem);
    },[props.transactions]);

    if(!props.transactions.length) return <h3 className="h3search">Add Some Transaction</h3>

    return ( 
        <section>
            <input type="text" className="search" value={searchItem} onChange={changeHandler} placeholder="search for Tnx"/>
            {filteredTnx.length ? filteredTnx.map( (t) => (
            <div key={t.id} className="transaction" style={{borderRight: t.type === "expense" && "5px solid red"}}>
                <span> {t.desc} </span> 
                <span> $ {t.amount} </span>
                 
            </div>
            )) : <h3 className="h3search">No Item Matchs !</h3>}
        </section>
     );
}
 
export default TransActionComponent;