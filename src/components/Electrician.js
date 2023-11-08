import React, { Fragment, useEffect, useState } from 'react';
import listOfElectriciansJSON from '../static/electricianData.json';
import rawSiteDataCopy from '../static/rawSiteData_copy.json';
import EachElectrician from './EachElectrician';

function Electrician() {
	const [listOfElectricians, setListOfElectricians] = useState(listOfElectriciansJSON);
	const [rawSiteData, setRawSiteData] = useState(rawSiteDataCopy);

	useEffect(() => {
		console.log(listOfElectricians);
	}, [])

	function autoAssignBegins() {
		console.log("autoAssignBegins---");
		console.log({ rawSiteData, listOfElectricians });

	}
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
								{/* <th scope="col">Actions</th> */}
							</tr>
						</thead>
						<tbody>
							{listOfElectricians ? listOfElectricians.map((eachEl, index) => {
								return (<EachElectrician eachEl={eachEl} key={(index + 1) + "-elect"} />)
							}) : null}
						</tbody>
					</table>
					<button onClick={() => autoAssignBegins()} className='atoAssignElectricians'>Auto-Assign Electrician</button>
				</>
			}

		</Fragment>
	)
}

export default Electrician