import PropTypes from "prop-types";

function AboutMeItem({fgColor, bgColor, title, children}) {
    return (
        <div className="flex flex-col w-10/12  items-start justify-center lg:w-1/2">
            <h2 className={`${fgColor} text-3xl`}>
                {title}
            </h2>
            <div className="flex flex-col w-full items-center justify-between md:flex-row">
                <p className="w-full md:w-10/12 my-5 md:my-0">
                    {children}
                </p>
                <div className={`w-full py-0.5 ${bgColor} md:h-52 md:px-0.5 md:py-0 md:w-fit`}>
                </div>
            </div>
        </div>
    )
}

AboutMeItem.propTypes = {
    fgColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default AboutMeItem;