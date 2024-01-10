import React, {FC} from 'react';
import {Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import UserStore from "../../store/UserStore";
import SidebarStore from "../../store/SidebarStore";
import {observer} from "mobx-react-lite";
import {cn} from "@bem-react/classname";
import './Options.scss'


interface IOption {
  name: string;
  icon: ReactJSXElement
}


const options = cn('Options')

const Options: FC = observer(() => {

  const openedOption = `${SidebarStore.visible ? 'opened' : 'closed'}`;

  const totalMessage = UserStore.users.reduce((sum, user) => {
    return sum + (user.unreadMessages ? 1 : 0);
  }, 0);

  const optionList: IOption[] = [
    {
      name: 'Диалоги',
      icon: <QuestionAnswerIcon className={options('Icon')}/>
    },
    {
      name: 'Настройки',
      icon: <SettingsIcon className={options('Icon')}/>
    }
  ]
  return (
    <Box className={options('Container')}>
      <List className={options('List')}>
        {optionList.map((option) => (
          <ListItem className={options('Item')} key={option.name} disablePadding>
            <ListItemButton className={options('Button')}>
              <ListItemIcon className={options('Icon')}>
                <Badge className={options('Badge', {place: 'icon'})}
                       invisible={SidebarStore.visible}
                       badgeContent={option.name === 'Диалоги' ? totalMessage : null}
                       color={'error'}
                       max={999}
                       anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'right',
                       }}
                >
                  {option.icon}
                </Badge>
              </ListItemIcon>
              <ListItemText className={`${options('Text')} ${openedOption}`}>
                {option.name}
              </ListItemText>
              <Badge className={options('Badge', {place: 'text'})}
                     invisible={!SidebarStore.visible}
                     badgeContent={option.name === 'Диалоги' ? totalMessage : null}
                     color={'error'}
                     max={999}
                     anchorOrigin={{
                       vertical: 'bottom',
                       horizontal: 'right',
                     }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default Options;
