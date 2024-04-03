
import { Route, Routes} from 'react-router-dom'
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

  const usuarioId = localStorage.getItem("usuarioId")

  
  
  

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
            <Route path='/CourseProgram' element={<CourseProgram/>}/>
            <Route path='/MyCourses' element={<MyCourses/>}/>
            <Route path='/PsychologySessions' element={<PsychologySessions/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
            
            <Route path='/resetpassword/:token' element={<ResetPasswordParams/>} />
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
        </Routes>
        <Footer></Footer>
    </div>
    </PayPalScriptProvider>
  )
}

export default MainRoutes