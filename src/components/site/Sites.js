import moment from "moment";
import { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import listOfElectriciansJSON from '../../static/electricianData.json';
import rawSiteDataCopy from '../../static/rawSiteData_copy.json';
import EachSite from './EachSite';
import SitesCSS from './Sites.module.css';

const maxSitesForAnElectrician = 3;
function Sites() {
	const [listOfElectricians, setListOfElectricians] = useState(listOfElectriciansJSON);
	const [rawSiteData, setRawSiteData] = useState(rawSiteDataCopy);
	const [assignDateToWorkOn, setAssignDateToWorkOn] = useState(new Date());

	const changeTheDate = (fullJSON, newDate) => {
		const newList = rawSiteData.map(eachSite => {
			if (JSON.stringify(eachSite) === JSON.stringify(fullJSON)) {
				fullJSON.InstallationDate = newDate;
				fullJSON.AssignedElectritian = [];
				return fullJSON;
			} else
				return eachSite
		})
		setRawSiteData(newList)
	}
	useEffect(() => {
		console.log("useEffect rawSiteData: ", rawSiteData);
	}, [rawSiteData])


	function autoAssignBegins() {
		// console.log(rawSiteData, listOfElectricians, assignDateToWorkOn);
		let grievanceElectricians = [];
		let generalElectricians = [];

		// This will not allow one electrician to be assigned to more than maxSitesForAnElectrician time on a date.
		for (let index = 0; index < maxSitesForAnElectrician; index++)
			for (let electrician of listOfElectricians)
				if (electrician.grievanceElectrician)
					grievanceElectricians.push(electrician);
				else
					generalElectricians.push(electrician);
		// console.log("Electrician list:", grievanceElectricians, generalElectricians);
		// console.log("rawSiteData", rawSiteData);

		let rawSiteDataOfChosenDate = []
		rawSiteDataOfChosenDate = rawSiteData.filter(sites => {
			if (!sites.InstallationDate)
				return false;
			return moment(assignDateToWorkOn).format("MM/DD/YYYY") === moment(sites.InstallationDate).format("MM/DD/YYYY")
		})
		if (rawSiteDataOfChosenDate.length < 1) {
			alert("No site available on date: '" + moment(assignDateToWorkOn).format("MM/DD/YYYY") + "'")
			return;
		}

		// - First assign to the grievance electrician on grievance sites, then assign generals
		// - Each electrician can max have 3 sites a day
		// - No need to consider zone
		// -> If both site and electrician are free, assign any electrician to any site.

		// All raw sites
		let copyRawSiteData = JSON.parse(JSON.stringify(rawSiteData))
		copyRawSiteData.forEach(site => {
			if (moment(assignDateToWorkOn).format("MM/DD/YYYY") === moment(site.InstallationDate).format("MM/DD/YYYY") && site.AssignedElectritian.length < 1) {
				if (site.grievance && grievanceElectricians.length > 0)
					site.AssignedElectritian.push(grievanceElectricians.shift());
				else if (!site.grievance && generalElectricians.length > 0)
					site.AssignedElectritian.push(generalElectricians.shift());
				else if (grievanceElectricians.length > 0)
					site.AssignedElectritian.push(grievanceElectricians.shift());
				else if (generalElectricians.length > 0)
					site.AssignedElectritian.push(generalElectricians.shift());
			}
		});
		setRawSiteData(copyRawSiteData);
		console.log(copyRawSiteData);
		console.log(rawSiteData);
		console.log("Assigned sites: ", rawSiteData.filter(eachAssignedSite => eachAssignedSite.AssignedElectritian.length > 0));
		setTimeout(() => {
			alert("Updated!")
		}, 100);
	}

	return (
		<Fragment>
			<div className={SitesCSS.assignSec}>
				<h3 style={{ marginRight: "8px" }}>Assign for date: </h3>
				<DatePicker selected={new Date(assignDateToWorkOn)} onChange={(date) => setAssignDateToWorkOn(date)} />
				<button onClick={() => autoAssignBegins()} className='atoAssignElectricians'>Auto-Assign Electrician</button>
			</div>

			{rawSiteData.length < 1 ? <h2 style={{ marginTop: "2em", textAlign: "center" }}>No Electrician Found</h2> :
				<table className="tableElectrician">
					<thead>
						<tr>
							<th scope="col">Site Owner</th>
							<th scope="col">Site Type</th>
							<th scope="col">Site contact</th>
							<th scope="col">Location</th>
							<th scope="col">Assigned Electricians</th>
							<th scope="col">Date - (MM/DD/YYY)</th>
						</tr>
					</thead>
					<tbody>
						{rawSiteData ? rawSiteData.map((eachSite, index) => {
							return (<EachSite site={eachSite} key={(index + 1) + "-elect"} changeTheDate={changeTheDate} />)
						}) : null}
					</tbody>
				</table>}
		</Fragment>
	)
}

export default Sites