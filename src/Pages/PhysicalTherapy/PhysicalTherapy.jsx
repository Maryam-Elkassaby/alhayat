import S1PhysicalTherapy from '../../Components/S1PhysicalTherapy/S1PhysicalTherapy'
import S2PhysicalTherapy from '../../Components/S2PhysicalTherapy/S2PhysicalTherapy';
import './PhysicalTherapy.module.css';
import SectionOneBookAppointment from './../../Components/SectionOneBookAppointment/SectionOneBookAppointment';


export default function PhysicalTherapy() {
  return <>
    <S1PhysicalTherapy />
    <S2PhysicalTherapy />
    <SectionOneBookAppointment />
  </>
}
