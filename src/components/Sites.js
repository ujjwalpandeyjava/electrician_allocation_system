import { Fragment, useEffect, useState } from 'react'
import EachSite from './EachSite'
import listOfSitesJSON from '../static/rawSiteData.json'

function Sites() {
	const [listOfSites, setListOfSites] = useState(listOfSitesJSON);

	const changeTheDate = (fullJSON, newDate) => {
		const newList = listOfSites.map((eachSite) => {
			if (JSON.stringify(eachSite) === JSON.stringify(fullJSON)) {
				fullJSON.InstallationDate = newDate;
				return fullJSON;
			} else
				return eachSite
		})
		setListOfSites([])
		setListOfSites(newList)
	}
	useEffect(() => {
		// console.log(listOfSites);
	}, [listOfSites])

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
							return (<EachSite site={eachSite} key={(index + 1) + "-elect"} changeTheDate={changeTheDate} />)
						}) : null}
					</tbody>
				</table>}
		</Fragment>
	)
}

export default Sites