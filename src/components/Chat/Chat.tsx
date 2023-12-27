import React, {FC} from 'react';
import { Box, Grid, Input, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {userData} from "../../data/UserData";
import UserAvatar from "../Avatar/UserAvatar";

interface ChatProps {
  userId: number;
}
const Chat: FC<ChatProps> = ({ userId }) => {

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
          {`Avada Kedavra`}
        </Typography>
        <Typography variant={"h6"}
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
        <Box>
          {currentUser.messages.map((message) => (
            <Grid container key={message.id}>
              <Grid item>
                <UserAvatar variantBadge={currentUser.online.status ? 'dot' : 'standard'}
                            src={currentUser.avatar} name={`${currentUser.first_name} ${currentUser.last_name}`} />
              </Grid>
              <Grid item>
                <Box p={1}>
                  <Typography variant="body1">
                    {message.content}
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
