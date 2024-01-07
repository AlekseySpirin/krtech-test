import React, {FC, useEffect, useState} from 'react';
import {
  Badge,
  BadgeProps,
  Box,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import UserAvatar from "../Avatar/UserAvatar";
// import {userData} from "../../data/UserData"
import {styled} from '@mui/material/styles';
import Divider from "@mui/material/Divider";
import UserChat from "../../store/UserChat";
import userStore from "../../store/UserStore";
import {observer} from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import {simulateUserActivity} from "../../utils/simulateUserActivity";

const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
  '& .MuiBadge-badge': {

    right: -20,
    top: 3,
    border: `1px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    padding: '12px 9px',
  },
}));

const UserList: FC = observer(() => {
  const [filterValue, setFilterValue] = useState<string>('');

  const filteredUsers = userStore.users.filter(user =>
    user.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
    user.last_name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  //
  // const handleTyping = (userId: number, isTyping: boolean) => {
  //   userStore.setTypingStatus(userId, isTyping);
  //
  //   if (isTyping) {
  //     // Очистить предыдущий таймер, если есть
  //     if (typingTimeout) {
  //       clearTimeout(typingTimeout);
  //     }
  //
  //     // Установить новый таймер для симуляции "Печать..." в течение 5 секунд
  //     const newTimeout = setTimeout(() => {
  //       userStore.incrementUnreadMessages(userId);
  //       setTypingTimeout(null);
  //     }, 5000);
  //
  //     setTypingTimeout(newTimeout);
  //   } else {
  //     // Если прекратили печать раньше, чем через 5 секунд, сбросить таймер
  //     if (typingTimeout) {
  //       clearTimeout(typingTimeout);
  //       setTypingTimeout(null);
  //     }
  //   }
  // };



  useEffect(() => {
    simulateUserActivity();
  }, []);


  return (
    <Box height={'92%'} width={'100%'}>
      <Stack alignItems={'center'} justifyContent={'center'} minHeight={'70px'} width={'100%'} direction={'row'}>
        <Input disableUnderline
               style={{
                 paddingLeft: '20px',
                 border: 'none',
                 borderRadius: '15px',
                 minHeight: '17px',
                 background: '#E7ECF1',
                 width: '317px',
                 alignItems: 'center',
               }}
               placeholder={'Поиск'}
               onChange={(e) => setFilterValue(e.target.value)}
        />
      </Stack>
      <Divider/>
      <List disablePadding sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflowY: 'scroll', // Используйте overflowY вместо overflow для прокрутки только по вертикали
        maxHeight: '100%',
        '& ul': {padding: 0},
        scrollbarWidth: 'auto', // Для Firefox
        '&::-webkit-scrollbar': {
          width: '8px', // Ширина полосы скролла
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#11447580', // Цвет полосы скролла
          borderRadius: '3px', // Скругление углов полосы скролла
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'background.paper', // Фон трека скролла соответствует фону контейнера
          borderRadius: '3px', // Скругление углов фона скролла
        },
        scrollbarColor: '#11447580 transparent', // Цвет полосы и фона скролла (для Firefox)
      }}>
        {filteredUsers.map((user, index) => (
          <ListItem sx={{width: '100%'}}
                    key={user.id}
                    disablePadding

          >
            <ListItemButton
              onClick={() => {
                UserChat.openUserChat(user.id)
                UserStore.resetUnreadMessages(user.id)
              }
              }
              disableRipple
              sx={{
                width: '100%',
                height: '72px',
                "&:focus": {
                  color: '#fff',
                  bgcolor: '#4290DE',
                  outline: 'none', // чтобы убрать стандартное браузерное подсвечивание при фокусе
                }
              }}
            >
              <ListItemAvatar>
                <UserAvatar variantBadge={user.online.status ? 'dot' : 'standard'}
                            src={index % 2 === 0 ? user.avatar : ''} name={`${user.first_name} ${user.last_name}`}/>
              </ListItemAvatar>
              <ListItemText
                // sx={{width: '80%'}}
                secondaryTypographyProps={{
                  width: '215px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                primary={`${user.first_name} ${user.last_name}`}
                secondary={
                  user.messages.length > 0
                    ? (user.isTyping ? 'Печатает...' : user.messages[user.messages.length - 1].content)
                    : `${user.first_name} ${user.last_name} теперь в CrimeaChat`
                }
              />
              <ListItemText
                // sx={{width: '20%'}}
                primary={
                  user.messages.length > 0
                    ? user.messages[user.messages.length - 1].time
                    : user.created?.time
                }
                primaryTypographyProps={{
                  textAlign: 'start',
                  color: '#114475B2',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  letterSpacing: '0.4px',
                }}
                secondary={<StyledBadge badgeContent={user.unreadMessages}
                                        color={'primary'}
                                        max={999}
                />}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    // <div className={Users()}>
    //     <ul className={UsersList()}>
    //         <li className={UsersItem()}>
    //             <User/>
    //         </li>
    //     </ul>
    // </div>
  );
});

export default UserList;
