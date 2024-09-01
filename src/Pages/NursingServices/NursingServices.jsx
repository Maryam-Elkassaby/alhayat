import S1NursingServices from './../../Components/S1NursingServices/S1NursingServices';
import S2NursingServices from './../../Components/S2NursingServices/S2NursingServices';
import SectionOneBookAppointment from './../../Components/SectionOneBookAppointment/SectionOneBookAppointment';
import SectionSevenHome from './../../Components/SectionSevenHome/SectionSevenHome';

export default function NursingServices() {
  return <>
    <S1NursingServices />
    <S2NursingServices />
    <SectionOneBookAppointment />
    <SectionSevenHome />
  </>
}
