import React, {FC} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";




interface IOption {
  name: string;
  icon: ReactJSXElement
}


interface OptionsProps {
  open: boolean
}


const Options: FC<OptionsProps> = ({open}) => {


  const optionList: IOption[] = [
    {
      name: 'Диалоги',
      icon: <QuestionAnswerIcon />
    },
    {
      name: 'Настройки',
      icon: <SettingsIcon />
    }
  ]
  return (
    <Box>
      {/*<List>*/}
      {/*  <ListItem disablePadding>*/}
      {/*    <ListItemButton>*/}
      {/*      <ListItemIcon>*/}
      {/*        <ListItemAvatar>*/}
      {/*          <Avatar>*/}
      {/*            <QuestionAnswerIcon/>*/}
      {/*          </Avatar>*/}
      {/*        </ListItemAvatar>*/}
      {/*      </ListItemIcon>*/}
      {/*      <ListItemText primary={'Диалоги'}>*/}
      {/*      </ListItemText>*/}
      {/*    </ListItemButton>*/}
      {/*  </ListItem>*/}
      {/*  <ListItem disablePadding>*/}
      {/*    <ListItemButton>*/}
      {/*      <ListItemIcon>*/}
      {/*        <ListItemAvatar>*/}
      {/*          <Avatar>*/}
      {/*            <SettingsIcon/>*/}
      {/*          </Avatar>*/}
      {/*        </ListItemAvatar>*/}
      {/*      </ListItemIcon>*/}
      {/*      <ListItemText primary={'Настройки'}>*/}
      {/*      </ListItemText>*/}
      {/*    </ListItemButton>*/}
      {/*  </ListItem>*/}
      {/*</List>*/}
      <List>
        {optionList.map((option) => (
          <ListItem key={option.name} disablePadding sx={{display: 'block'}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                {option.icon}
              </ListItemIcon>
              <ListItemText  primary={option.name} sx={{opacity: open ? 1 : 0, color: '#fff'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Options;
