import Header from "./header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer.tsx";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className="flex-shrink-0">
                <div className="container">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    );
};
