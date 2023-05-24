import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Complaintlist.css';

function Complaintlist() {
    const [show, setShow] = useState(false);

  return (
    <div>
           <div className="row">
      <div className="col-4">
      <Sidebar show={show} setShow={setShow}/>
      </div>
      </div>
      <div class="container1">
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Branch Name</th>
				<th>Complaint</th>
				<th>Date</th>
				<th>Subject</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
		</tbody>
	</table>
</div>
    </div>
  )
}

export default Complaintlist
