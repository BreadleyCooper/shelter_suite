import React, { useState, useEffect } from "react"
import Header from "@/components/Header"
import HomeComponent from "@/components/HomeComponent"
import LoadingPage from "@/components/LoadingScreen"
import Router from "next/router"
import {app} from "@/firebaseConfig"

import { getAuth, onAuthStateChanged } from "firebase/auth"


export default function Home() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        Router.push("/signIn")
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  if (!authenticated) {
    return null
  }

  return (
    <div>
      <Header />
      <HomeComponent />
    </div>
  )
}
