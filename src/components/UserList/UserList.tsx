import React, {FC} from 'react';
import {Box, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack} from "@mui/material";
import UserAvatar from "../Avatar/UserAvatar";

type ISender = {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string,
  online: boolean
}

type IMessage = {
  id: string,
  sender: ISender;
  timestamp: string,
  date: string,
  time: string,
  content: string,
  direction: string
}

type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string
  gender: string;
  ip_address: string;
  avatar: string;
  online: boolean;
  messages: IMessage[]

};


export const userData: IUser[] = [
  {
    id: 1,
    first_name: "Averil",
    last_name: "Palfreeman",
    email: "apalfreeman0@gnu.org",
    gender: "Female",
    ip_address: "156.100.181.180",
    avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]

  },
  {
    id: 2,
    first_name: "Denis",
    last_name: "Cressar",
    email: "dcressar1@amazonaws.com",
    gender: "Bigender",
    ip_address: "199.214.126.227",
    avatar: "https://robohash.org/quiautblanditiis.png?size=50x50&set=set1",
    online: true,
    messages: []
  },
  {
    id: 3,
    first_name: "Heidie",
    last_name: "Hackwell",
    email: "hhackwell2@archive.org",
    gender: "Female",
    ip_address: "18.186.187.12",
    avatar: "https://robohash.org/culpadolorumlibero.png?size=50x50&set=set1",
    online: true,
    messages: []
  },
  {
    id: 4,
    first_name: "Neville",
    last_name: "Goard",
    email: "ngoard3@symantec.com",
    gender: "Male",
    ip_address: "56.247.55.96",
    avatar: "https://robohash.org/quoreiciendisnihil.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 5,
    first_name: "Ilyssa",
    last_name: "Jellett",
    email: "ijellett4@bravesites.com",
    gender: "Female",
    ip_address: "167.8.109.90",
    avatar: "https://robohash.org/velearumassumenda.png?size=50x50&set=set1",
    online: true,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 6,
    first_name: "Bradan",
    last_name: "Corbould",
    email: "bcorbould5@unesco.org",
    gender: "Male",
    ip_address: "99.170.231.71",
    avatar: "https://robohash.org/ipsumquisquamaut.png?size=50x50&set=set1",
    online: true,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 7,
    first_name: "Paco",
    last_name: "Rollo",
    email: "prollo6@tiny.cc",
    gender: "Male",
    ip_address: "72.44.226.190",
    avatar: "https://robohash.org/cumculpavoluptas.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 8,
    first_name: "Dario",
    last_name: "Southey",
    email: "dsouthey7@thetimes.co.uk",
    gender: "Male",
    ip_address: "82.104.3.160",
    avatar: "https://robohash.org/voluptatemnamqui.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 9,
    first_name: "Alon",
    last_name: "Woffenden",
    email: "awoffenden8@cisco.com",
    gender: "Male",
    ip_address: "36.92.37.8",
    avatar: "https://robohash.org/sequihicfuga.png?size=50x50&set=set1",
    online: true,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 10,
    first_name: "Danette",
    last_name: "Richards",
    email: "drichards9@zdnet.com",
    gender: "Female",
    ip_address: "111.216.240.75",
    avatar: "https://robohash.org/placeatetdignissimos.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 11,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 12,
    first_name: "Debee",
    last_name: "Bumby",
    email: "dbumbyb@mozilla.com",
    gender: "Female",
    ip_address: "173.100.159.159",
    avatar: "https://robohash.org/cupiditateperspiciatisfugiat.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 13,
    first_name: "Ange",
    last_name: "Manuaud",
    email: "amanuaudc@hud.gov",
    gender: "Female",
    ip_address: "57.190.48.12",
    avatar: "https://robohash.org/rationedignissimosaut.png?size=50x50&set=set1",
    online: true,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 14,
    first_name: "Gwenore",
    last_name: "Aimer",
    email: "gaimerd@wikipedia.org",
    gender: "Female",
    ip_address: "194.93.10.200",
    avatar: "https://robohash.org/voluptasquasicommodi.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 15,
    first_name: "Rosalyn",
    last_name: "Rameaux",
    email: "rrameauxe@godaddy.com",
    gender: "Female",
    ip_address: "175.100.149.239",
    avatar: "https://robohash.org/liberovoluptasvel.png?size=50x50&set=set1",
    online: true,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 16,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 17,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 18,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 19,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 20,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 21,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 22,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 23,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  },
  {
    id: 24,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: false,
    messages: [
      {
        id: "message_1",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:30:00Z",
        date: "26 декабря 2023",
        time: "12:30",
        content: "Привет, как дела?",
        direction: "incoming"
      },
      {
        id: "message_2",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:35:00Z",
        date: "26 декабря 2023",
        time: "12:35",
        content: "Привет! У меня все отлично, спасибо!",
        direction: "incoming"
      },
      {
        id: "message_3",
        sender: {
          id: 2,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/отправитель.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:40:00Z",
        date: "26 декабря 2023",
        time: "12:40",
        content: "Что нового?",
        direction: "incoming"
      },
      {
        id: "message_4",
        sender: {
          id: 1,
          first_name: "Averil",
          last_name: "Palfreeman",
          avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
          online: true
        },
        timestamp: "2023-12-26T12:45:00Z",
        date: "26 декабря 2023",
        time: "12:45",
        content: "Ничего особенного, работа и так далее. Как у тебя?",
        direction: "incoming"
      }
    ]
  }
]


const UserList: FC = () => {
  return (
    <Box height={'100%'} width={'100%'}>
      <List disablePadding sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflowY: 'scroll', // Используйте overflowY вместо overflow для прокрутки только по вертикали
        maxHeight: '100vh',
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
        {userData.map((user, index) => (
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
