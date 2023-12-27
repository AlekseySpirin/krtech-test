import React, {FC, useState} from 'react';
import {Box, Input, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack,} from "@mui/material";
import UserAvatar from "../Avatar/UserAvatar";
import {userData} from "../data/UserData"


const UserList: FC = () => {
  const [filterValue, setFilterValue] = useState<string>('');

  const filteredUsers = userData.filter(user =>
    user.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
    user.last_name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Box height={'92%'} width={'100%'}>
      <Stack justifyContent={'center'} alignItems={'center'} minHeight={'70px'} width={'100%'} direction={'row'}>
        {/*<Input placeholder={"Поиск"}*/}
        {/*       type="search"*/}
        {/*       classes={{ inputTypeSearch: 'MuiFilledInput-inputTypeSearch' }}*/}
        {/*       onChange={((e) => setFilterValue(e.target.value))}*/}
        {/*       sx={{*/}
        {/*         backgroundColor: '#6D84A0',*/}
        {/*         borderRadius: 16,*/}
        {/*         height: 16,*/}
        {/*         width: 258,*/}
        {/*         color: 'rgba(0, 0, 0, 0.87)',*/}
        {/*         '&:hover': {*/}
        {/*           borderColor: 'transparent',*/}
        {/*         },*/}
        {/*         '&.Mui-focused': {*/}
        {/*           borderColor: 'transparent',*/}
        {/*         },*/}
        {/*       }}*/}
        {/*/>*/}
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
          <ListItem key={user.id} disablePadding>
            <ListItemButton
              disableRipple
              sx={{
                height: '72px',
                "&:focus": {
                  color: '#fff',
                  bgcolor: '#4290DE',
                  outline: 'none', // чтобы убрать стандартное браузерное подсвечивание при фокусе
                }
              }}
            >
              <ListItemAvatar>
                <UserAvatar variantBadge={user.online ? 'dot' : 'standard'}
                            src={index % 2 === 0 ? user.avatar : ''} name={`${user.first_name} ${user.last_name}`}/>
              </ListItemAvatar>
              <Stack direction={'row'} width={'100%'}>
                <ListItemText
                  secondaryTypographyProps={{
                    width: '250px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={
                    user.messages.length > 0
                      ? user.messages[user.messages.length - 1].content
                      : `${user.first_name} ${user.last_name} теперь в CrimeaChat`
                  }
                />
                <ListItemText
                  primaryTypographyProps={{
                    textAlign: 'center',
                    color: '#114475B2',
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    letterSpacing: '0.4px',
                  }}
                  primary={
                    user.messages.length > 0
                      ? user.messages[user.messages.length - 1].time
                      : ``
                  }
                />
              </Stack>
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
};

export default UserList;
