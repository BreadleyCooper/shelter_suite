import React, {useEffect} from "react";
import Header from "@/components/Header";
import MatchesDogCard from "@/components/MatchesDogCard";
import MatchesPersonCard from "@/components/MatchesPersonCard"
import Filter from "@/components/Filter";
import LoadingScreen from "@/components/LoadingScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "@/firebaseConfig"
import Router from "next/router"


export default function Matches() {

    const [loading, setLoading] = React.useState(true)
    const [authenticated, setAuthenticated] = React.useState(false)    
 
    useEffect(() => {
      const auth = getAuth(app)
      const unsubscribe = onAuthStateChanged(auth, (user)=> {
        if(user) {
          setAuthenticated(true)
        } else {
          Router.push("/signIn")
        }
        setLoading(false)
      })
      return () => unsubscribe
    }, [])

    if (loading) {
        return <LoadingScreen />
      }
      if (!authenticated) {
        return null
      }

    return (
        <div>
            <Header />
            <Filter />
            <MatchesDogCard />
            <MatchesPersonCard />
        </div>
        )
}