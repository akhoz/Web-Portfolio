import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
            <Typography
                as="li"
                variant="large"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className="p-1 font-normal"
            >
                <Link to="/About/" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Skills
                </a>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
        </ul>
    );

    return (
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-main-bg border-none shadow-none mt-5 px-4 py-2 lg:mt-0 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                    </Typography>
                    <div className="flex items-center">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                size="md"
                                className="hidden lg:inline-block border-2 border-base-j bg-main-bg
                                smooth hover:bg-base-j hover:text-hover-fg"
                            >
                                <span>Resume</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent my-4 lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button
                            fullWidth
                            className="border-2 border-base-j bg-main-bg
                                smooth hover:bg-base-j hover:text-hover-fg"
                        >
                            <span>Resume</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
    )
}

export default Header;