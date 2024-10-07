import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

export default function Pitchdecks() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                    <Sidebar  title={'Pitchdecks'} />
                </div>
                <div className="col-span-5">
                    <Navbar  title={'Pitchdecks'} />
                    <h1>Pitchdecks</h1>
                    <Footer />  
                </div>
            </div>
        </div>
    );
}
