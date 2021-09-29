import React from 'react'
import '../style/my_work.css'

const testData = [1,2,3,4]

function MyWork() {
    return (
        <div className='my_work_main' >
            {testData.map((e,index)=>{
                return (
                    <div key={e} className='cube'>
                        <img src="./img/testPic.png" alt=""/>
                    </div>
                )
            })}
        </div>
    )
}

export default MyWork
