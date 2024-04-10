import TopNavigationbar from './TopNavbar/TopNavbar.jsx';
import MainNavigationbar from './MainNavbar/MainNavbar.jsx';
import Footer from './Footer/Footer.jsx';
import Splash from './Splash/Splash.jsx';
import Main from './Main/Main.jsx';
import Overview from './Overview/Overview.jsx'
import Profile from './Profile/Profile.jsx';
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <div className="headerHolder">
                <TopNavigationbar />
                <MainNavigationbar />
            </div>
            <Splash />
            <Main />
            <Overview />
            <div className="bottomContainer">
                <div className="profileContainer">
                    <Profile />
                </div>
                <div className="footerContainer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}