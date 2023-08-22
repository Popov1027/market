import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/menu.svg';
import { useState } from 'react';

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const menuSet = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <>
      <header className={'bg-[#27282D] h-16 flex items-center '}>
        <nav className={'flex flex-row items-center mx-20 w-full justify-between'}>
          <div className={'m-0'}>
            <Logo className={'h-[25px] m-0'} />
          </div>
          <ul className={'no-underline text-white pr-[20px] hidden md:block font-semibold'}>
            <li
              className={
                'inline-block transition-all  duration-[0.3s] hover:text-blue-500 px-[20px]'
              }>
              <a href="#">Products</a>
            </li>
            <li
              className={
                'inline-block transition-all  duration-[0.3s] hover:text-blue-500 px-[20px]'
              }>
              <a href="#">Cart</a>
            </li>
            <li
              className={
                'inline-block transition-all duration-[0.3s] hover:text-blue-500 px-[20px]'
              }>
              <a href="#">User</a>
            </li>
          </ul>
          <button
            onClick={() => {
              localStorage.removeItem('token');
            }}
            className={
              'bg-blue-500 rounded-[50px] border-none py-[8px] px-[20px] transition-all duration-[0.3s] hover:bg-blue-600 hidden md:block'
            }>
            <span className={'text-white'}>Log Out</span>
          </button>
          <button className={'block md:hidden'} onClick={menuSet}>
            <Menu
              className={
                'h-[30px] w-[30px] transition-all duration-[0.3s] hover:h-[33px] hover:w-[33px] '
              }
            />
          </button>
        </nav>
      </header>
      {menu ? (
        <div className={'bg-[#27282D] block md:hidden flex justify-start flex-wrap'}>
          <ul className={'no-underline text-white   font-semibold text-lg w-full mx-20'}>
            <li
              className={
                'w-full py-1  inline-block transition-all  duration-[0.3s] hover:text-blue-500 px-[7px] hover:bg-[#34353C]  rounded-[7px]'
              }>
              <a href="#">Cart</a>
            </li>
            <li
              className={
                ' w-full py-1 inline-block  transition-all duration-[0.3s] hover:text-blue-500 px-[7px] mt-2 hover:bg-[#34353C]  rounded-[7px]'
              }>
              <a href="#">User</a>
            </li>
            <li
              className={
                'w-full py-1 inline-block  transition-all  duration-[0.3s] hover:text-blue-500 px-[7px] mt-2 mb-2 hover:bg-[#34353C]  rounded-[7px]'
              }>
              <a href="#">Products</a>
            </li>
          </ul>
          <hr className={'w-full  border-none h-[0.5px] bg-[#34353C] '} />
          <ul className={'no-underline text-white   font-semibold text-lg w-full mx-20'}>
            <li
              onClick={() => {
                localStorage.removeItem('token');
              }}
              className={
                'w-full py-1 my-2  inline-block transition-all  duration-[0.3s] hover:text-blue-500 px-[7px] hover:bg-[#34353C]  rounded-[7px]'
              }>
              Log Out
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
