import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Adminpanel({ mustVerifyEmail, status }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                    <Sidebar title={'Adminpanel'} />
                </div>
                <div className="col-span-5">
                    <Navbar title={'Adminpanel'} />
                    <h1>Adminpanel</h1>
                    <Footer />  
                </div>
            </div>
        </div>
    );
}
