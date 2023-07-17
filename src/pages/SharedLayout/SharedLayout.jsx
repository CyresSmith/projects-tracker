import { Outlet } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { Content, SharedLayoutBox } from './SharedLayout.styled';
import RightBar from 'components/RightBar/RightBar';

const SharedLayout = () => {
  return (
    <SharedLayoutBox>
      <SideBar />
      <Content>
        <Outlet />
      </Content>
      <RightBar />
    </SharedLayoutBox>
  );
};

export default SharedLayout;
