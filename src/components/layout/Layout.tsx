import Header from "./Header";
import MainComponents from "../MainComponents";

function Layout() {
    return (
        <div className="w-full pt-[5rem] pb-[5rem] bg-no-repeat bg-top-cent bg-[top_center] bg-stone-300 bg-[url(/bg-desktop-light.jpg)] text-gray-500">
            <div className="max-w[54rem] mt-0 mr-auto mb-0 ml-auto">
                <Header />
                <MainComponents />
            </div>
        </div>
    );
}

export default Layout;
