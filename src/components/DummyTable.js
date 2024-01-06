import React from "react";

function DummyTable({length, page}){
    let dummytable = []
    for(let i = 0; i <= length; i++){
        dummytable.push(
            <tr key={i} className=''>
                <td className="py-1"></td>
                <td></td>
                <td className="d-sm-none"></td>
                <td className="d-sm-none"></td>
                <td className="d-sm-none"></td>
                <td className="d-sm-none"></td>
                {page !== "top-scorer" && <>
                    <td className="d-sm-none"></td>
                    <td></td>
                    <td></td>
                </>}
            </tr>
        )
    }
    return dummytable
}

export default DummyTable