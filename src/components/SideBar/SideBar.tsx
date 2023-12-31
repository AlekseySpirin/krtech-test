import React, {FC} from 'react';
import {Badge, BadgeProps, Box, IconButton, Stack, Typography} from "@mui/material";
import Options from "../Options/Options";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import UserAvatar from "../Avatar/UserAvatar";
import {observer} from "mobx-react-lite";
import Sidebar from "../../store/Sidebar";


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

const SideBar: FC = observer(() => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  return (
    <Box height={'100vh'}>
      <Drawer variant="permanent" open={Sidebar.visible} onClose={() => Sidebar.closed()}
      >
        <DrawerHeader sx={{padding: Sidebar.visible ? '40px' : '8px'}}>
          <UserAvatar
            sx={{width: !Sidebar.visible ? 48 : 100, height: !Sidebar.visible ? 48 : 100, border: '2px solid white'}}
            name={`${user.firstName} ${user.secondName}`}
            src={`${user.avatar.src}`}
          />
          <Typography sx={{display: Sidebar.visible ? 'inline-block' : 'none', color: '#fff'}}
                      fontSize={'18px'}
                      className={'User-Title_color_white'}
                      variant={"h4"}>{`${user.firstName} ${user.secondName}`}
          </Typography>
          <Stack sx={{display: Sidebar.visible ? 'flex' : 'none',}} spacing={1} direction={'row'} alignItems={'center'}>
            <StyledBadge anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
                         variant={'dot'}
                         sx={{display: Sidebar.visible ? 'inline-block' : 'none',}}>
            </StyledBadge>
            <Typography sx={{opacity: Sidebar.visible ? 1 : 0, color: '#fff'}}
                        variant={'subtitle1'}>{user.online ? 'Online' : 'Offline'}
            </Typography>
          </Stack>
        </DrawerHeader>
        <Stack height={'100%'} marginBottom={2} justifyContent={'space-between'}>
          <Options open={Sidebar.visible}/>
          <Stack direction={'row'} justifyContent={'center'}>
            {/*<Avatar variant={"square"} sx={{width: '80%'}}>*/}
            <IconButton sx={{
              width: !Sidebar.visible ? '40px' : '80%',
              height: '30px',
              borderRadius: '4px',
              color: '#2680D9',
              backgroundColor: '#58AAFC',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
              }
            }} size={'large'} onClick={() => Sidebar.visible ? Sidebar.closed() : Sidebar.opened()}>
              {!Sidebar.visible ? <KeyboardDoubleArrowRightIcon fontSize={"large"}/> :
                <KeyboardDoubleArrowLeftIcon fontSize={"large"}/>}
            </IconButton>
            {/*</Avatar>*/}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
});

export default SideBar;
