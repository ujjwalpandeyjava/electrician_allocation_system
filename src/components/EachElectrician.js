import React from 'react';
import Avatar from 'react-avatar';

function EachElectrician({ eachEl }) {
	// name ,phoneNumberNumber ,zone ,grievanceElectrician
	const { name, phoneNumber, zone, grievanceElectrician } = eachEl ? eachEl : "";
	return (
		<tr>
			<td><Avatar name={name} size="40" round={true} className="mr-2" />{name}</td>
			<td>{grievanceElectrician ? "Grievance" : "General"}</td>
			<td>{phoneNumber}</td>
			<td>{zone.length < 1 ? "N/A" : zone.join(", ")}</td>
		</tr >
	)
}

export default EachElectrician