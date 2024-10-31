
import { Navigate, Route, Routes} from 'react-router-dom'
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
import ModalComments from './ModalComments';
import Footer from '../Footer/Footer';
import ModifyClasses from '../adminuser/ModifyClasses';
import ReceiptPayment from '../adminuser/ReceiptPayment';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Error404 from './Error404';
import ForgetPassword from '../user/ForgetPassword';
import ResetPasswordParams from '../user/ResetPasswordParams';






const MainRoutes = () => {

  
  const rol = localStorage.getItem("rol")
  const token = localStorage.getItem("token")
  
  
  

  return (
    <PayPalScriptProvider 
    options={{
      "clientId":import.meta.env.VITE_PAYMENT_CLIENT_ID
    }}
    >
    <div>
      <Navbar/>
      <ModalComments/>
      <SideMenuNotifications/>
      <SideMenu/>
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/CourseProgram' element={token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<CourseProgram/>:<Navigate to= "/"/>}/>
            <Route path='/MyCourses' element={token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<MyCourses/>:<Navigate to= "/"/>}/> 
            <Route path='/PsychologySessions' element={rol==="USER_ROLE" || rol==="PATIENT_ROLE" && token?<PsychologySessions/>:<Navigate to= "/"/>}/>
            <Route path='/Login' element={!token?<Login/>:""}/>
            <Route path='/Register' element={!token?<Register/>:""}/>
            <Route path='/ForgetPassword' element={!token?<ForgetPassword/>:<Navigate to= "/"/>}/>
            <Route path='/resetpassword/:token' element={!token?<ResetPasswordParams/>:""} />
            <Route path='/UserList' element={rol==="ADMIN_ROLE" && token?<UserList/>:<Navigate to= "/"/>}/>
            <Route path='/Classes/AddVideos' element={rol==="ADMIN_ROLE" && token?<AddClasses/>:<Navigate to= "/"/>}/>
            <Route path='/Classes/ModifyClasses' element={rol==="ADMIN_ROLE" && token?<ModifyClasses/>:<Navigate to= "/"/>}/>
            <Route path='/Pay' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<Pay/>:<Navigate to= "/"/>}/>
            <Route path='/PayItem' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<PayItem/>:<Navigate to= "/"/>}/>
            <Route path='/HistorialPaymentAdmin' element={rol==="ADMIN_ROLE" && token?<HistorialPaymentAdmin/>:<Navigate to= "/"/>}/>
            <Route path='/HistorialPaymentUser' element={rol==="PATIENT_ROLE" || rol==="USER_ROLE" && token ?<HistorialPaymentUser/>:<Navigate to= "/"/>}/>
            <Route path='/PayItemService' element={rol=="ADMIN_ROLE" && token?<PayItemService/>:<Navigate to= "/"/>}/>
            <Route path='/PatientCalendar' element={rol=="ADMIN_ROLE" && token?<PatientCalendar/>:<Navigate to= "/"/>}/>
            <Route path='/MoreNotifications' element={<MoreNotifications/>}/>
            <Route path='/ReceiptPayment' element={rol=="ADMIN_ROLE" && token?<ReceiptPayment/>:<Navigate to= "/"/>}/>
            <Route path='/PaySessionCv' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<PaySessionCv/>:<Navigate to= "/"/>}/>
        </Routes>
        <Footer></Footer>
    </div>
    </PayPalScriptProvider>
  )
}

export default MainRoutes