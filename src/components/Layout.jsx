import PropTypes from "prop-types";

function Layout({ aditionalClasses, children }) {
    return (
        <div className="w-screen flex items-center justify-center my-40">
            <div className={`flex flex-col w-full items-center justify-center space-y-28 md:space-y-10 ${aditionalClasses}`}>
                {children}
            </div>
        </div>
    )
}

Layout.propTypes = {
    aditionalClasses: PropTypes.string,
    children: PropTypes.node,
}

export default Layout;