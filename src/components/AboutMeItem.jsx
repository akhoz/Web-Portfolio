import PropTypes from "prop-types";

function AboutMeItem(props) {
    return (
        <div className="flex flex-col w-10/12  items-start justify-center lg:w-1/2">
            <h2 className={`text-${props.color} text-3xl`}>
                {props.title}
            </h2>
            <div className="flex flex-col w-full items-center justify-between md:flex-row">
                <p className="w-10/12">
                    {props.children}
                </p>
                <div className={`w-full py-0.5 mt-3 bg-${props.color} md:h-52 md:px-0.5 md:py-0 md:w-fit`}>
                </div>
            </div>
        </div>
    )
}

AboutMeItem.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default AboutMeItem;