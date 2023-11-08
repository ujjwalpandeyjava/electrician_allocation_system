import { useState } from 'react';
import Avatar from 'react-avatar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EachSite({ site, changeTheDate }) {
  let { name, phone, city, AssignedElectritian, grievance } = site ? site : "";
  const [InstallationDate, setInstallationDate] = useState(site.InstallationDate);
  const changeDate = (newDate) => {
    changeTheDate(site, newDate)
    setInstallationDate(newDate);
    site.InstallationDate = newDate;
    return InstallationDate;
  }
  // console.log(AssignedElectritian);
  const siteElectricians = AssignedElectritian.length > 0 ? AssignedElectritian.map(ea => ea.name).join(", ") : "__";
  return (
    <tr>
      <td><Avatar name={name} size="35" round={false} className="mr-2" />{name}</td>
      <td>{grievance ? "Grievance" : "General"}</td>
      <td>{phone}</td>
      <td>{city}</td>
      <td>{siteElectricians}</td>
      <td> <DatePicker selected={new Date(InstallationDate)} onChange={(date) => changeDate(date)} /></td>
    </tr >
  )
}

export default EachSite