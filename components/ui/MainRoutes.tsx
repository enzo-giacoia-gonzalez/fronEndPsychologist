
import { Navigate, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Start from './../start/Start';
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
            <Route path='https://fron-end-psychologist.vercel.app/CourseProgram' element={token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<CourseProgram/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/MyCourses' element={token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<MyCourses/>:<Navigate to= "/"/>}/> 
            <Route path='https://fron-end-psychologist.vercel.app/PsychologySessions' element={rol==="USER_ROLE" || rol==="PATIENT_ROLE" && token?<PsychologySessions/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/Login' element={!token?<Login/>:""}/>
            <Route path='https://fron-end-psychologist.vercel.app/Register' element={!token?<Register/>:""}/>
            <Route path='https://fron-end-psychologist.vercel.app/ForgetPassword' element={!token?<ForgetPassword/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/resetpassword/:token' element={!token?<ResetPasswordParams/>:""} />
            <Route path='https://fron-end-psychologist.vercel.app/UserList' element={rol==="ADMIN_ROLE" && token?<UserList/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/Classes/AddVideos' element={rol==="ADMIN_ROLE" && token?<AddClasses/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/Classes/ModifyClasses' element={rol==="ADMIN_ROLE" && token?<ModifyClasses/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/Pay' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<Pay/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/PayItem' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<PayItem/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/HistorialPaymentAdmin' element={rol==="ADMIN_ROLE" && token?<HistorialPaymentAdmin/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/HistorialPaymentUser' element={rol==="PATIENT_ROLE" || rol==="USER_ROLE" && token ?<HistorialPaymentUser/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/PayItemService' element={rol=="ADMIN_ROLE" && token?<PayItemService/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/PatientCalendar' element={rol=="ADMIN_ROLE" && token?<PatientCalendar/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/MoreNotifications' element={<MoreNotifications/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/ReceiptPayment' element={rol=="ADMIN_ROLE" && token?<ReceiptPayment/>:<Navigate to= "/"/>}/>
            <Route path='https://fron-end-psychologist.vercel.app/PaySessionCv' element={rol=="PATIENT_ROLE" || rol=="USER_ROLE" && token ?<PaySessionCv/>:<Navigate to= "/"/>}/>
        </Routes>
        <Footer></Footer>
    </div>
    </PayPalScriptProvider>
  )
}

export default MainRoutes