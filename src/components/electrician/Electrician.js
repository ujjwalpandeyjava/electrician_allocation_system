import React, { Fragment, useState } from 'react';
import listOfElectriciansJSON from '../../static/electricianData.json';
import EachElectrician from './EachElectrician';

function Electrician() {
	const [listOfElectricians, setListOfElectricians] = useState(listOfElectriciansJSON);

	return (
		<Fragment>
			{/* {console.log(listOfElectricians)} */}
			{listOfElectricians.length < 1 ? <h2 style={{ marginTop: "2em", textAlign: "center" }}>No Electrician Found</h2> :
				<>
					<table className="tableElectrician">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Electrician Type</th>
								<th scope="col">Phone No</th>
								<th scope="col">Zones</th>
							</tr>
						</thead>
						<tbody>
							{listOfElectricians ? listOfElectricians.map((eachEl, index) => {
								return (<EachElectrician eachEl={eachEl} key={(index + 1) + "-elect"} />)
							}) : null}
						</tbody>
					</table>
				</>
			}
		</Fragment>
	)
}

export default Electrician