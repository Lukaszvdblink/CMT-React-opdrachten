import UserProfile from "../components/UserProfile"

const setUserProfile = (profile) => {
localStorage.setItem('userProfile', JSON.stringify(profile))
}

const getUserProfile = () => {
    try{
        return JSON.parse(localStorage.getItem('userProfile')) || null
    } catch{
        return null
    }
}

const setAppointments = () => {
    
}

const getAppointments = () => {
    
}