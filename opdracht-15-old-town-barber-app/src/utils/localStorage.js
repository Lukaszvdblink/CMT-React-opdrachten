const USER_KEY = "userProfile";
const APPOINTMENTS_KEY = "appointments";

export function getUserProfile() {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setUserProfile(profile) {
  localStorage.setItem(USER_KEY, JSON.stringify(profile));
}

export function getAppointments() {
  try {
    const data = localStorage.getItem(APPOINTMENTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function setAppointments(appointments) {
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
}
