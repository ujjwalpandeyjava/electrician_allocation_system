import { useState } from 'react';
import Avatar from 'react-avatar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EachSite({ site, changeTheDate }) {
  let { name, phone, city, AssignedElectritian, grievance } = site ? site : "";
  const [InstallationDate, setInstallationDate] = useState(site.InstallationDate);
  /*{
    "name": "KRISHNA ROY",
    "grievance": false
    "phone": "6163988877",
    "city": "DELHI",
    "AssignedElectritian": [],
    "InstallationDate": "2023-01-04T00:00:00.000Z",
}*/
  /*  const installDate = (utcTimestamp) => {
     const date = new Date(utcTimestamp);
     const formattedDate = date.toLocaleString('en-US', {
       hour: 'numeric',
       minute: 'numeric',
       hour12: true,
       day: '2-digit',
       month: '2-digit',
       year: 'numeric',
     });
     return formattedDate;
   } */
  const changeDate = (newDate) => {
    changeTheDate(site, newDate)
    setInstallationDate(newDate);
    site.InstallationDate = newDate;
    return InstallationDate;
  }

  const siteElectricians = AssignedElectritian.length > 0 ? AssignedElectritian.map((ea) => ea.electricianName) : "__";
  return (
    <tr>
      <td><Avatar name={name} size="35" round={false} className="mr-2" />{name}</td>
      <td>{grievance ? "Grievance" : "General"}</td>
      <td>{phone}</td>
      <td>{city}</td>
      <td>{siteElectricians}</td>
      {/* <td>{installDate(InstallationDate)}</td> */}
      <td> <DatePicker selected={new Date(InstallationDate)} onChange={(date) => changeDate(date)} /></td>
    </tr >
  )
}

export default EachSite