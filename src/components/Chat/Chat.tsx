import React, {FC, useEffect, useRef} from 'react';
import {Box, Grid, Input, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import userChat from '../../store/UserChat'
import {observer} from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import {myId} from "../../utils/constants";


const Chat: FC = observer(() => {

  const currentUser = UserStore.users.find(user => user.id === userChat.userChatId);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Прокрутка вниз контейнера при монтировании компонента
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
  }, [currentUser]);


  if (!currentUser) {
    return null; // Если пользователя не найдено, выходим из компонента
  }
  return (
    <Grid direction={'column'} container width={'100%'}>
      <Grid
        sx={{
          height: '70px',
          width: '100%',
          backgroundColor: '#FFFFFF',
        }}
        direction={'column'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        item
      >
        <Typography variant={"h6"} sx={{
          color: '#114475',

          fontFamily: 'Roboto',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '0.4px',
        }}>
          {`${currentUser.first_name} ${currentUser.last_name}`}
        </Typography>
        <Typography variant={"h6"}
                    textAlign={'center'}
                    sx={{
                      color: '#2580DB',
                      paddingTop: '7px',
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      lineHeight: '20px',
                      letterSpacing: '0.4px',
                    }}>
          {currentUser.isTyping ? 'Печатает...' : 'был(а) недавно'}
        </Typography>
      </Grid>
      <Divider/>
      <Grid item xs
            ref={containerRef}
            sx={{
        backgroundColor: '#E7ECF1',
        width: '100%',
        position: 'relative',
        overflowY: 'scroll',
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
        <Box display={'grid'} >
          {currentUser.messages.map((message) => (
            <Grid container
                  sx={message.sender.id === myId ? {
                      flexDirection: 'row-reverse',
                      padding: '10px',


                    }
                    :
                    {
                      flexDirection: 'row',
                      padding: '10px',


                    }}
                  key={message.id}>
              <Grid item
                    display={'flex'}
                    direction={'row'}
                    style={{
                      maxWidth: '470px',
                      display: 'inline-flex',
                      backgroundColor: message.sender.id === myId ? '#267FDB' : '#FFF',
                      borderRadius: message.sender.id === myId ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      color: message.sender.id === myId ? '#FFF' : '#000',
                      padding: '8px 16px 6px 16px',
                      marginLeft: message.sender.id === myId ? '20px' : '0',
                      marginRight: message.sender.id === myId ? '0' : '20px',
                      alignItems: 'flex-end',
                      gap: '10px',
                    }}
              >
                <Typography
                  variant="body1"
                  textAlign={'start'}
                >
                  {message.content}
                </Typography>
                <Box style={{
                  display: 'flex',
                  paddingTop: '8px',
                  alignItems: 'flex-end',
                  gap: '10px'
                }}>
                  <Typography style={{}}
                              variant="body2"
                              textAlign={'right'}
                  >
                    {message.time}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Grid>
      <Divider flexItem/>
      <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} minHeight={'54px'} width={'100%'} sx={{
        backgroundColor: '#fff'
      }}>
        <Input disableUnderline
               style={{
                 width: '95%',
                 paddingLeft: '20px',
                 border: 'none',
                 borderRadius: '15px',
                 minHeight: '17px',
                 background: '#E7ECF1',
                 alignItems: 'center',
               }}
               placeholder={'Написать сообщение...'}
        />
      </Stack>
    </Grid>
  );
});

export default Chat;
