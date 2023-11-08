import Avatar from 'react-avatar';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function EachSite({ site }) {
  const { name, phone, city, AssignedElectritian, InstallationDate, grievance } = site ? site : "";
  /*{
    "name": "KRISHNA ROY",
    "grievance": false
    "phone": "6163988877",
    "city": "DELHI",
    "AssignedElectritian": [],
    "InstallationDate": "2023-01-04T00:00:00.000Z",
}*/
  const installDate = (utcTimestamp) => {
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
  }
  const setDate = (newDate) => {
    console.log(newDate);
    return "";
  }
  const siteElectricians = AssignedElectritian.length > 0 ? AssignedElectritian.map((ea) => ea.electricianName) : "__";
  return (
    <tr>
      <td><Avatar name={name} size="35" round={false} className="mr-2" />{name}</td>
      <td>{grievance ? "Grievance" : "General"}</td>
      <td>{phone}</td>
      <td>{city}</td>
      <td>{siteElectricians}</td>
      <td>{installDate(InstallationDate)}</td>
      <td> <DatePicker selected={InstallationDate} onChange={(date) => setDate(date)} /></td>
    </tr >
  )
}

export default EachSite