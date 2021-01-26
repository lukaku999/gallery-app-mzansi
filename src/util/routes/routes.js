import Gallery from '../../pages/Gallery'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import Tensorflow from '../../pages/tensorflow'

export default [
    
    {   
        path: '/',
        component: <Home/>,
        protected: null   
    },
    
    {   
        path: '/gallery',
        component: <Gallery/>, 
        protected: 'auth'  
    },
    {   
        path: '/login',
        component: <Login/>,   
        protected: 'guest'
    },
    {
        path: '/signup',
        component: <SignUp/>,   
        protected: 'guest'
    },

    {
        path: "/tensorflow",
        component: <Tensorflow/>,
        protected: null
    }


]