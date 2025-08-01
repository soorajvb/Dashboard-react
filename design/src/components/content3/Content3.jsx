import React from 'react'
 import './Content3.css'

const Content3 = () => {
  return (
   <>
   <div>
     <div className="content3">
        <div className="options">
            <ul>
                <li><a href="">My request</a></li>
                <li><a href="">My Approval</a></li>
                <li><a href="">Recently Processed Request</a></li>
                <li><a href="">All Processed Contact</a></li>
            </ul>
             <table>
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Borrerer Name</th>
              <th>Request Type</th>
              <th>Due Date</th>
              <th>Request Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loan Agreement - NGEN</td>
              <td>NextGen Enterprise</td>
              <td>Review</td>
              <td>27th Aug 2019</td>
             <td><button className='btn1'>Assigned</button></td>
            </tr>
            <tr>
              <td>Loan Agreement - Game</td>
              <td>Game Technology</td>
              <td>Approval</td>
              <td>20th Aug 2019</td>
               <td><button className='btn1'>Assigned</button></td>
            </tr>
            <tr>
              <td>Loan Agreement - Tag</td>
              <td>TAG Corp</td>
              <td>Review</td>
              <td>28th Jul 2019</td>
               <td><button className='btn2'>In process</button></td>
            </tr>
            <tr>
              <td>Loan Agreement - New LLC</td>
              <td>New LLC</td>
              <td>Sign - off</td>
              <td>10th Jul 2019</td>
              <td><button className='btn3'>Overdue</button></td>
            </tr>
          </tbody>
        </table>
        </div>
       
     </div>
   </div>
   </>
  )
}

export default Content3
