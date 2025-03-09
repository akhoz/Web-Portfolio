import PropTypes from "prop-types";

function SkillItem({ fgColor, title, text, children}) {
    return (
        <div className="flex flex-col w-10/12  items-start justify-center space-y-1 lg:w-1/2">
            <h2 className={`${fgColor} text-3xl`}>
                {title}
            </h2>
            <div className="flex flex-col w-full items-start justify-start space-y-5">
                <p className="w-full my-2 md:my-0">
                    {text}
                </p>
                <div className="w-full flex items-center justify-center">
                    <div className="w-4/6 grid grid-cols-3 items-center justify-center text-5xl gap-2 md:grid-cols-4 xl:grid-cols-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

SkillItem.propTypes = {
    fgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.node,
    children: PropTypes.node
};

export default SkillItem;