import React, {FC} from 'react';
import {Badge, BadgeProps, Box, IconButton, Stack, Typography} from "@mui/material";
import Options from "../Options/Options";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import UserAvatar from "../UserAvatar/UserAvatar";
import {observer} from "mobx-react-lite";
import SidebarStore from "../../store/SidebarStore";


const drawerWidth = 247;

interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  avatar: {
    src: string;
  },
  online: boolean

}

const user: IUser = {
  id: 1,
  firstName: 'Алексей',
  secondName: 'Спирин',
  avatar: {
    src: 'https://www.epicdope.com/wp-content/uploads/2023/04/Saitama.jpg'
  },
  online: true
}


const openedMixin = (theme: Theme): CSSObject => ({

  backgroundColor: '#2680D9',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({

  backgroundColor: '#2680D9',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(20)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    justifyItems: 'center',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
  '& .MuiBadge-badge': {
    border: `1px solid ${theme.palette.background.paper}`,
    backgroundColor: '#44b700',
    padding: '3px 3px',
    borderRadius: '50%'
  },
}));

const Sidebar: FC = observer(() => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  return (
    <Box height={'100vh'}>
      <Drawer variant="permanent" open={SidebarStore.visible} onClose={() => SidebarStore.closed()}
      >
        <DrawerHeader sx={{padding: SidebarStore.visible ? '40px' : '8px'}}>
          <UserAvatar
            sx={{width: !SidebarStore.visible ? 80 : 100, height: !SidebarStore.visible ? 80 : 100, border: '2px solid white'}}
            name={`${user.firstName} ${user.secondName}`}
            src={`${user.avatar.src}`}
          />
          <Typography sx={{display: SidebarStore.visible ? 'inline-block' : 'none', color: '#fff'}}
                      fontSize={'18px'}
                      className={'User-Title_color_white'}
                      variant={"h4"}>{`${user.firstName} ${user.secondName}`}
          </Typography>
          <Stack sx={{display: SidebarStore.visible ? 'flex' : 'none',}} spacing={1} direction={'row'} alignItems={'center'}>
            <StyledBadge anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
                         variant={'dot'}
                         sx={{display: SidebarStore.visible ? 'inline-block' : 'none',}}>
            </StyledBadge>
            <Typography sx={{opacity: SidebarStore.visible ? 1 : 0, color: '#fff'}}
                        variant={'subtitle1'}>{user.online ? 'Online' : 'Offline'}
            </Typography>
          </Stack>
        </DrawerHeader>
        <Stack height={'100%'} marginBottom={2} justifyContent={'space-between'}>
          <Options open={SidebarStore.visible}/>
          <Stack direction={'row'} justifyContent={'center'}>
            {/*<Avatar variant={"square"} sx={{width: '80%'}}>*/}
            <IconButton sx={{
              width: !SidebarStore.visible ? '40px' : '80%',
              height: '30px',
              borderRadius: '4px',
              color: '#2680D9',
              backgroundColor: '#58AAFC',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
              }
            }} size={'large'} onClick={() => SidebarStore.visible ? SidebarStore.closed() : SidebarStore.opened()}>
              {!SidebarStore.visible ? <KeyboardDoubleArrowRightIcon fontSize={"large"}/> :
                <KeyboardDoubleArrowLeftIcon fontSize={"large"}/>}
            </IconButton>
            {/*</Avatar>*/}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
});

export default Sidebar;
