import { Fragment } from 'react'
import listOfSites from '../static/rawSiteData.json'
import EachSite from './EachSite'

function Sites() {
	return (
		<Fragment>
			{/* {console.log(listOfSites)} */}
			{listOfSites.length < 1 ? <h2 style={{ marginTop: "2em", textAlign: "center" }}>No Electrician Found</h2> :
				<table className="tableElectrician">
					<thead>
						<tr>
							<th scope="col">Site Owner</th>
							<th scope="col">Site Type</th>
							<th scope="col">Site contact</th>
							<th scope="col">Location</th>
							<th scope="col">Assigned Electricians</th>
							<th scope="col">Date</th>
						</tr>
					</thead>
					<tbody>
						{listOfSites ? listOfSites.map((eachSite, index) => {
							return (<EachSite site={eachSite} key={(index + 1) + "-elect"} />)
						}) : null}
					</tbody>
				</table>}
		</Fragment>
	)
}

export default Sites