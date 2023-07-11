import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';

const SharedLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
