
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Start from '../start/start';
import SideMenu from './SideMenu';
import CourseProgram from '../courseprogram/CourseProgram';
import MyCourses from '../courseprogram/MyCourses';
import Login from '../user/Login';
import Register from '../adminuser/Register';
import UserList from '../adminuser/UserList';
import AddClasses from '../adminuser/AddClasses';
import PsychologySessions from '../courseprogram/PsychologySessions';
import Pay from '../pay/Pay';
import HistorialPaymentAdmin from '../pay/HistorialPaymentAdmin';
import HistorialPaymentUser from '../pay/HistorialPaymentUser';
import PayItemService from '../adminuser/PayItemService';
import PatientCalendar from '../adminuser/PatientCalendar';
import SideMenuNotifications from './SideMenuNotifications';
import MoreNotifications from '../user/MoreNotifications';
import PayItem from '../pay/PayItem';

import PaySessionCv from '../pay/PaySessionCv';
import PaySessionPaypal from '../pay/PaySessionPaypal';
import ModalComments from './ModalComments';
import Footer from '../Footer/Footer';
import ModifyClasses from '../adminuser/ModifyClasses';
import ReceiptPayment from '../adminuser/ReceiptPayment';





const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <ModalComments/>
      <SideMenuNotifications/>
      <SideMenu/>
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/CourseProgram' element={<CourseProgram/>}/>
            <Route path='/MyCourses' element={<MyCourses/>}/>
            <Route path='/PsychologySessions' element={<PsychologySessions/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/UserList' element={<UserList/>}/>
            <Route path='/Classes/AddVideos' element={<AddClasses/>}/>
            <Route path='/Classes/ModifyClasses' element={<ModifyClasses/>}/>
            <Route path='/Pay' element={<Pay/>}/>
            <Route path='/PayItem' element={<PayItem/>}/>
            <Route path='/HistorialPaymentAdmin' element={<HistorialPaymentAdmin/>}/>
            <Route path='/HistorialPaymentUser' element={<HistorialPaymentUser/>}/>
            <Route path='/PayItemService' element={<PayItemService/>}/>
            <Route path='/PatientCalendar' element={<PatientCalendar/>}/>
            <Route path='/MoreNotifications' element={<MoreNotifications/>}/>
            <Route path='/ReceiptPayment' element={<ReceiptPayment/>}/>
            <Route path='/PaySessionCv' element={<PaySessionCv/>}/>
            <Route path='/PaySessionPaypal' element={<PaySessionPaypal/>}/>
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default MainRoutes