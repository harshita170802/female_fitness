import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { setisLogin } from '../Store/Authslice'
import { useDispatch } from 'react-redux'
import Logo from '../assets/logo/logo-no-background.png'

export const Navber = () => {
  const dispatch = useDispatch()
  // logout from firebase
  const handleSignout = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      isOnline: false,
    })
    await signOut(auth)
    dispatch(setisLogin(false))
  }

  const { authinfo } = useSelector((state) => state)

  return (
    <nav>
      <div>
        <img src={Logo} className="logo_nav"></img>
      </div>

      <h3>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'selected' : null)}>
          Home
        </NavLink>
      </h3>

      <h3>
        <NavLink
          to="/charts"
          className={({ isActive }) => (isActive ? 'selected' : null)}>
          Plans
        </NavLink>
      </h3>

      <h3>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? 'selected' : null)}>
          FAQs
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/feedback"
          className={({ isActive }) => (isActive ? 'selected' : null)}>
          Feedback
        </NavLink>
      </h3>

      <div>
        {authinfo.isLogin ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'selected' : null)}>
              Profile
            </NavLink>

            <button className="btn_nav" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? 'selected' : null)}>
              Register
            </NavLink>

            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? 'selected' : null)}>
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
