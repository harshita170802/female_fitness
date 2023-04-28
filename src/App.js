import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navber } from './Component/Navber'
import { RegisterPage } from './Pages/RegisterPage'
import { LoginPage } from './Pages/LoginPage'
import { UserAuth } from './Component/UserAuth'
import { NeedLogin } from './Component/NeedLogin'
import { Profile } from './Component/Profile'
import { HomePage } from './Pages/HomePage'
import { FeedbackPage } from './Pages/FeedbackPage'
import {Footer} from './Component/Footer'
import { FaqPage } from './Pages/FaqPage'
import { Addtocard} from './Component/addtocard'
import {PlanFromPage} from './Pages/PlanFromPage'
import ResetPasswordPage from './Pages/ResetPasswordPage'
import NearbyRestaurants from './Component/NearbyRestaurants';
import LiveRoom from './Component/Home/LiveRoom'
import RoomPage from './Component/Room'

function App () {
  return (
    <div>

      <UserAuth />
      <Navber />
      <Routes>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/profile' element={<NeedLogin> <Profile /></NeedLogin>}></Route> 
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/plan' element={<NeedLogin>< PlanFromPage/></NeedLogin>}></Route>
        <Route path='/faq' element={<FaqPage />}></Route>
        <Route path='/feedback' element={< FeedbackPage/>}></Route>
        <Route path='/addtocard' element ={<Addtocard />}></Route>
        <Route path='/NearbyRestaurants' element ={<NearbyRestaurants/>}></Route>
        <Route path='/ResetPassword' element={<ResetPasswordPage />}></Route>
        <Route path='/LiveRoom' element={<NeedLogin><LiveRoom/></NeedLogin>}></Route>
        <Route path='/room/:roomId' element={<RoomPage/>}></Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
