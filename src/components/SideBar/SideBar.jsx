import Logo from 'components/shared/Logo';
import { LogoLink, SidebarBox } from './SideBar.styled';
import ProjectSelect from './ProjectSelect/ProjectSelect';
import ToolsList from './Tools/ToolsList';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <SidebarBox>
      <LogoLink to="/">
        <Logo color width={196} height={48} />
      </LogoLink>
      <ProjectSelect />
      <ToolsList />
      <div
        style={{
          marginTop: '200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          justifyContent: 'flex-start',
        }}
      >
        <Link to="/login">Login page</Link>
        <Link to="/register">Register page</Link>
      </div>
    </SidebarBox>
  );
};

export default SideBar;
