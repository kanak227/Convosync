import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast';


export const useAuthStore = create((set , get)=>({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async()=>{
        try {
            const res = await axiosInstance.get('/auth/check');
            set({authUser: res.data});
        } 
        catch (error) {
            set({ authUser: null });
        }
        finally{
            set({isCheckingAuth: false});
        }
    },

    signup: async(data) =>{
        set({isSigningUp : true})
        try {
            const res = await axiosInstance.post('/auth/signup' , data);
            set({authUser: res.data});
            toast.success("Account created successfully");   
        } catch (error) {
            toast.error(error.response.data.message);
        } finally{
            set({isSigningUp: false});
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({ authUser: res.data });
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to login");
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async() =>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to logout");
        }
    }

,
    updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
        const res = await axiosInstance.put('/auth/update-profile', data);

        set((state) => ({
            authUser: {
                ...state.authUser,
                profilePic: res.data.profilePic
            }
        }));
        toast.success("Profile updated successfully");
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
        set({ isUpdatingProfile: false });
    }
}
}))

