import React, {FC} from 'react';
import {Badge, Box, IconButton, Stack, Typography} from '@mui/material';
import Options from '../Options/Options';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Drawer from '@mui/material/Drawer';
import UserAvatar from '../UserAvatar/UserAvatar';
import {observer} from 'mobx-react-lite';
import SidebarStore from '../../store/SidebarStore';
import './Sidebar.scss';
import {cn} from "@bem-react/classname";

type TUser = {
  id: number;
  firstName: string;
  secondName: string;
  avatar: {
    src: string;
  },
  online: boolean

}

const user: TUser = {
  id: 1,
  firstName: 'Алексей',
  secondName: 'Спирин',
  avatar: {
    src: 'https://www.epicdope.com/wp-content/uploads/2023/04/Saitama.jpg'
  },
  online: true
}

const drawer = cn('Drawer')

const Sidebar: FC = observer(() => {

  const activeSidebar = `${SidebarStore.visible ? 'opened' : 'closed'}`

  return (
    <Drawer variant="permanent"
            open={SidebarStore.visible}
            onClose={() => SidebarStore.closed()}
            className={`${drawer()} ${activeSidebar}`}>
      <Box className={`${drawer('Header')} ${activeSidebar}`}>
        <UserAvatar className={`${drawer('Avatar')} ${activeSidebar}`}
                    name={`${user.firstName} ${user.secondName}`}
                    src={`${user.avatar.src}`}
        />
        <Typography className={`${drawer('Title')} ${activeSidebar}`}>
          {`${user.firstName} ${user.secondName}`}
        </Typography>
        <Stack className={`${drawer('Status')} ${activeSidebar}`}>
          <Badge className={`${drawer('Badge')} ${activeSidebar}`}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'left',
                 }}
                 variant={'dot'}
          />
          <Typography className={`${drawer('Subtitle')} ${activeSidebar}`}
                      variant={'subtitle1'}>
            {user.online ? 'Online' : 'Offline'}
          </Typography>
        </Stack>
      </Box>
      <Stack className={`${drawer('Option-wrapper')} ${activeSidebar}`}>
        <Options/>
        <Stack className={drawer('Icon-wrapper')}>
          <IconButton className={`${drawer('Toggle-button')} ${activeSidebar}`}
                      size={'large'}
                      onClick={() => (SidebarStore.visible ? SidebarStore.closed() : SidebarStore.opened())}>
            {!SidebarStore.visible ? (
              <KeyboardDoubleArrowRightIcon className={drawer('Icon')}/>
            ) : (
              <KeyboardDoubleArrowLeftIcon className={drawer('Icon')}/>
            )}
          </IconButton>
        </Stack>
      </Stack>
    </Drawer>
  );
});

export default Sidebar;
