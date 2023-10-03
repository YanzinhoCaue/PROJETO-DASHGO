import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} children="Dashboard" href='/dashboard'/>
        <NavLink icon={RiContactsLine} children="Usuários" href="/users"/>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} children="Formulários" href='/forms'/>
        <NavLink icon={RiGitMergeLine} children="Automação" href='/automation'/>
      </NavSection>
    </Stack>
  );
}
