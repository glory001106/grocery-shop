import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsBagDash, BsFillHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { ProductContext } from '../../../contexts/ProductsProvider';

const NavBar = () => {
    const { cartProducts, savedProducts } = useContext(ProductContext);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => alert(err))
    }

    const nav = [
        {
            id: 5,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Shop",
            link: "/shop",
        },
        {
            id: 3,
            name: "Blog",
            link: "/blog",
        },
        {
            id: 1,
            name: "About",
            link: "/about",
        }
    ]

    return (
        <Navbar className='pt-5 sticky top-0 z-50' fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-2xl font-bold uppercase text-emerald-500"> Organic Store </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <p className='mr-2 font-bold'>{user?.displayName}</p>
                <div className='flex text-2xl align-middle'>
                    <div className="indicator">
                        <span className="indicator-item bg-fuchsia-500 border-0 badge p-1 badge-secondary text-xs font-bold">{savedProducts.length}</span>
                        <label htmlFor="favorites-modal" className='hover:text-emerald-400 cursor-pointer'><BsFillHeartFill /></label>
                    </div>
                    <div className="indicator mx-5">
                        <span className="indicator-item bg-yellow-300 border-0 badge p-1 badge-secondary text-xs font-bold">{cartProducts.length}</span>
                        <label htmlFor="cart-modal" className='hover:text-emerald-400 cursor-pointer'><BsBagDash /></label>
                    </div>
                </div>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    nav.map(n => <Link className='text-lg hover:text-emerald-500 font-semibold border-gray-100 hover:bg-gray-100 border-b md:border-b-0 p-2 md:p-0 md:hover:bg-transparent' key={n.id} to={n.link}>{n.name}</Link>)
                }
                {user ? <>
                    <Link className='text-lg hover:text-emerald-500 font-semibold border-gray-100 hover:bg-gray-100 border-b md:border-b-0 p-2 md:p-0 md:hover:bg-transparent' to='/review'>Review Cart</Link>
                    <Button gradientDuoTone="cyanToBlue" size="xs" onClick={handleLogOut}>Log Out</Button>
                </> :
                    <Link to="/login">
                        <Button
                            className='flex align-middle mt-2 md:mt-0'
                            size="xs"
                            outline={true}
                            gradientDuoTone="greenToBlue"
                        >
                            Login
                        </Button>
                    </Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;