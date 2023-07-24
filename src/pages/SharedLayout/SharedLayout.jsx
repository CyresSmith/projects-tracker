import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { Content, SharedLayoutBox } from './SharedLayout.styled';
import RightBar from 'components/RightBar/RightBar';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <SharedLayoutBox>
      <SideBar />
      <Content>
        <>
          <Header />
          <Outlet />
        </>
      </Content>
      <RightBar />
    </SharedLayoutBox>
  );
};

export default SharedLayout;
