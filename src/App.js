import TopNavigationbar from './TopNavbar/TopNavbar.jsx';
import MainNavigationbar from './MainNavbar/MainNavbar.jsx';
import Bottom from './Bottom/Bottom.jsx';
import Splash from './Splash/Splash.jsx';
import Main from './Main/Main.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <TopNavigationbar />
            <MainNavigationbar />
            <Splash />
            <Main />
            <Bottom />
        </div>
    )
}