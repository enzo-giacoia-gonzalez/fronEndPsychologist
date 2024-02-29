
import './App.css'

import { UiProvider } from '../context/ui/UiProvider';
import MainRoutes from '../components/ui/MainRoutes';
import { AuthProvider } from '../context/auth/AuthProvider';
import { VideoProvider } from '../context/video/VideoProvider';
import { ServiceProvider } from '../context/services';
import { ReceiptProvider } from '../context/receipts';
import { SearchProvider } from '../context/searchUser/SearchProvider';




function App() {
  

  return (
   
    <ReceiptProvider>
    <VideoProvider>
    <UiProvider>
    <SearchProvider>
    <AuthProvider>
      <ServiceProvider>
   <MainRoutes></MainRoutes>
   </ServiceProvider>
   </AuthProvider>
   </SearchProvider>
    </UiProvider>
    </VideoProvider>
    </ReceiptProvider>

  )
}

export default App
