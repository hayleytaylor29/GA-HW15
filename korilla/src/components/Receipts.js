import React from 'react';
import Receipt from './Receipt'

const Receipts = ({receipts}) => {
    return (
        <div className="body">
            {receipts.map((receipt)=>{
                return(
                        // {receipts.forEach(receipt => {
                        //     if {paid === true}
                        // });}
                        
                        <Receipt receipt={receipt}/>
                        
                        )
                }
    )}
        </div>
    )}


export default Receipts
