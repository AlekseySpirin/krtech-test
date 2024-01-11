import React, {FC, useEffect, useState} from 'react';
import {Badge, Box, Input, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack,} from "@mui/material";
import UserAvatar from "../UserAvatar/UserAvatar";
import Divider from "@mui/material/Divider";
import UserChat from "../../store/UserChat";
import userStore from "../../store/UserStore";
import UserStore from "../../store/UserStore";
import {observer} from "mobx-react-lite";
import {simulateUserActivity} from "../../utils/simulateUserActivity";
import {cn} from "@bem-react/classname";
import './UserList.scss'
import AnimatedDots from "../Icon/AnimatedDots";


const UserList: FC = observer(() => {
  const userList = cn('UserList')
  const search = cn('Search')
  const [filterValue, setFilterValue] = useState<string>('');
  const filteredUsers = userStore.users.filter(user =>
    user.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
    user.last_name.toLowerCase().includes(filterValue.toLowerCase())
  );

  useEffect(() => {
    simulateUserActivity();
  }, []);


  return (
    <Box className={userList('Wrapper')}>
      <Stack className={search('Wrapper')}>
        <Input name={'search'}
          className={search('Input')} disableUnderline
               placeholder={'Поиск'}
               onChange={(e) => setFilterValue(e.target.value)}
        />
      </Stack>
      <Divider/>
      <List className={userList()} disablePadding>
        {filteredUsers.map((user) => (
          <ListItem className={userList('Item')}
                    key={user.id}>
            <ListItemButton className={userList('Button')}
                            onClick={
                              () => {
                                UserChat.openUserChat(user.id)
                                UserStore.resetUnreadMessages(user.id)
                              }
                            }
                            disableRipple>
              <ListItemAvatar>
                <UserAvatar variantBadge={user.online.status ? 'dot' : 'standard'}
                            src={user.avatar}
                            name={`${user.first_name} ${user.last_name}`}
                />
              </ListItemAvatar>
              <ListItemText className={userList('TextItem')}
                            primary={`${user.first_name} ${user.last_name}`}
                            secondary={
                              user.messages.length > 0
                                ? (user.isTyping ? <AnimatedDots /> : user.messages[user.messages.length - 1].content)
                                : `${user.first_name} ${user.last_name} теперь в CrimeaChat`
                            }
              />
              <ListItemText className={userList('Counter')}
                            primary={
                              user.messages.length > 0
                                ? user.messages[user.messages.length - 1].time
                                : user.created?.time
                            }
                            secondary={<Badge badgeContent={user.unreadMessages}
                                              className={userList('Badge')}
                                              max={999}
                            />}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default UserList;
