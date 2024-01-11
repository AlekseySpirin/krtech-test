import React, {FC, useEffect, useRef} from 'react';
import {Grid, Input, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import userChat from '../../store/UserChat'
import {observer} from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import {myId} from "../../utils/constants";
import {cn} from "@bem-react/classname";
import './Chat.scss'
import AnimatedDots from "../Icon/AnimatedDots";


const Chat: FC = observer(() => {


  const chat = cn('Chat')
  const messages = cn('Messages')

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
    <Grid className={chat()}
          container>
      <Grid className={chat('TitleWrapper')}
            container>
        <Typography className={chat('Title')}>
          {`${currentUser.first_name} ${currentUser.last_name}`}
        </Typography>
        <Typography className={chat('Subtitle')}>
          {currentUser.isTyping ?  <AnimatedDots /> : 'был(а) недавно'}
        </Typography>
      </Grid>
      <Divider/>
      <Grid className={messages('Wrapper')} item xs
            ref={containerRef}>
        {currentUser.messages.map((message) => (
          <Grid className={`${messages('ItemWrapper')} ${message.sender.id === myId ? 'user' : 'sender'}`}
                container
                key={message.id}>
            <Grid className={`${messages('Item')} ${message.sender.id === myId ? 'user' : 'sender'}`}>
              <Typography className={`${messages('Text')} ${message.sender.id === myId ? 'user' : 'sender'}`}>
                {message.content}
              </Typography>
              <Typography className={`${messages('Time')} ${message.sender.id === myId ? 'user' : 'sender'}`}>
                {message.time}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Divider flexItem/>
      <Stack className={messages('InputWrapper')}>
        <Input className={messages('Input')}
               name={'message'}
               disableUnderline
               placeholder={'Написать сообщение...'}
        />
      </Stack>
    </Grid>
  );
});

export default Chat;
