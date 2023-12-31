import React, {FC} from 'react';
import {Box, Grid, Input, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {userData} from "../../data/UserData";


interface ChatProps {
  userId: number;
}

const Chat: FC<ChatProps> = ({userId}) => {

  const currentUser = userData.find(user => user.id === userId);

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
          {`Печатает...`}
        </Typography>
      </Grid>
      <Divider/>
      <Grid item xs sx={{
        backgroundColor: '#E7ECF1'
      }}>
        <Box display={'grid'}>
          {currentUser.messages.map((message) => (
            <Grid container
                  sx={message.sender.id === userId ? {
                      flexDirection: 'row-reverse',
                      padding: '10px',


                    }
                    :
                    {
                      flexDirection: 'row',
                      padding: '10px',


                    }}
                  key={message.id}>
              {/*<Grid item>*/}
              {/*  <UserAvatar variantBadge={currentUser.online.status ? 'dot' : 'standard'}*/}
              {/*              src={currentUser.avatar} name={`${currentUser.first_name} ${currentUser.last_name}`}/>*/}
              {/*</Grid>*/}
              <Grid item
                    display={'flex'}
                    direction={'row'}
                // style={{
                //   backgroundColor: message.sender.id === userId ? '#267FDB' : '#FFF',
                //   borderRadius: message.sender.id === userId ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                //   padding: '5px',
                //   color: message.sender.id === userId ? '#FFF' : '#000',
                // }}
                    style={{
                      maxWidth: '470px',
                      display: 'inline-flex',
                      backgroundColor: message.sender.id === userId ? '#267FDB' : '#FFF',
                      borderRadius: message.sender.id === userId ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      color: message.sender.id === userId ? '#FFF' : '#000',
                      padding: '8px 16px 6px 16px',
                      marginLeft: message.sender.id === userId ? '20px' : '0',
                      marginRight: message.sender.id === userId ? '0' : '20px',
                      alignItems: 'flex-end',
                      gap: '10px',
                    }}
              >
                <Typography
                  //   style={{
                  //   backgroundColor: message.sender.id === userId ? '#267FDB' : '#FFF',
                  //   borderRadius: message.sender.id === userId ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  //   padding: '5px',
                  //   color: message.sender.id === userId ? '#FFF' : '#000',
                  // }}
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
};

export default Chat;
