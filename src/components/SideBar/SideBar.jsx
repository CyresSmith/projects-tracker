import Logo from 'components/shared/Logo';
import { LogoLink, SidebarBox } from './SideBar.styled';
import ProjectSelect from './ProjectSelect/ProjectSelect';
import ToolsList from './Tools/ToolsList';

const SideBar = () => {
  return (
    <SidebarBox>
      <LogoLink to="/">
        <Logo color width={196} height={48} />
      </LogoLink>
      <ProjectSelect />
      <ToolsList />
    </SidebarBox>
  );
};

export default SideBar;
