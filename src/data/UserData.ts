import {myId} from "../utils/constants";

type TSender = {
  id: number
  // first_name: string,
  // last_name: string,
  // avatar: string,
}

type TMessage = {
  id: string,
  sender: TSender;
  timestamp: string,
  date: string,
  time: string,
  content: string,
  // direction: string
}

type TUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string
  gender: string;
  ip_address: string;
  avatar: string;
  created?: {
    date: string;
    time: string;
  }
  online: {
    status: boolean;
    startTime: string;
    endTime: string;
  };
  isTyping: boolean;
  wasTyping: boolean;
  unreadMessages: number;
  messages: TMessage[]

};

const messageList: TMessage[] = [
  {
    id: "message_1",
    sender: {
      id: 1,
    },
    timestamp: "2023-12-26T12:30:00Z",
    date: "26 декабря 2023",
    time: "12:30",
    content: "Привет, как дела?",
  },
  {
    id: "message_2",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:35:00Z",
    date: "26 декабря 2023",
    time: "12:32",
    content: "Привет! У меня все отлично, спасибо!",

  },
  {
    id: "message_3",
    sender: {
      id: 1,
    },
    timestamp: "2023-12-26T12:40:00Z",
    date: "26 декабря 2023",
    time: "12:35",
    content: "Что нового?",

  },
  {
    id: "message_4",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:45:00Z",
    date: "26 декабря 2023",
    time: "12:45",
    content: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для вставки на интернет-страницы",

  },

  {
    id: "message_5",
    sender: {
      id: 1,

    },
    timestamp: "2023-12-26T12:30:00Z",
    date: "26 декабря 2023",
    time: "12:47",
    content: "Привет, как дела?",

  },
  {
    id: "message_6",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:35:00Z",
    date: "26 декабря 2023",
    time: "12:48",
    content: "Привет! У меня все отлично, спасибо!",

  },
  {
    id: "message_7",
    sender: {
      id: 1,
    },
    timestamp: "2023-12-26T12:40:00Z",
    date: "26 декабря 2023",
    time: "12:49",
    content: "Что нового?",

  },
  {
    id: "message_8",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:45:00Z",
    date: "26 декабря 2023",
    time: "12:50",
    content: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для вставки на интернет-страницы",

  },

  {
    id: "message_9",
    sender: {
      id: 1,

    },
    timestamp: "2023-12-26T12:30:00Z",
    date: "26 декабря 2023",
    time: "12:51",
    content: "Привет, как дела?",

  },
  {
    id: "message_10",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:35:00Z",
    date: "26 декабря 2023",
    time: "12:52",
    content: "Привет! У меня все отлично, спасибо!",

  },
  {
    id: "message_11",
    sender: {
      id: 1,
    },
    timestamp: "2023-12-26T12:40:00Z",
    date: "26 декабря 2023",
    time: "12:53",
    content: "Что нового?",

  },
  {
    id: "message_12",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:45:00Z",
    date: "26 декабря 2023",
    time: "12:54",
    content: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для вставки на интернет-страницы",

  },

  {
    id: "message_13",
    sender: {
      id: 1,

    },
    timestamp: "2023-12-26T12:30:00Z",
    date: "26 декабря 2023",
    time: "12:56",
    content: "Привет, как дела?",

  },
  {
    id: "message_14",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:35:00Z",
    date: "26 декабря 2023",
    time: "12:57",
    content: "Привет! У меня все отлично, спасибо!",

  },
  {
    id: "message_15",
    sender: {
      id: 1,
    },
    timestamp: "2023-12-26T12:40:00Z",
    date: "26 декабря 2023",
    time: "12:58",
    content: "Что нового?",

  },
  {
    id: "message_16",
    sender: {
      id: myId,
    },
    timestamp: "2023-12-26T12:45:00Z",
    date: "26 декабря 2023",
    time: "12:59",
    content: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для вставки на интернет-страницы",

  }
]


export const userData: TUser[] = [
  {
    id: 1,
    first_name: "Averil",
    last_name: "Palfreeman",
    email: "apalfreeman0@gnu.org",
    gender: "Female",
    ip_address: "156.100.181.180",
    avatar: "https://robohash.org/quisenimnon.png?size=50x50&set=set1",
    created: {
      date: "26 декабря 2023",
      time: "12:30",
    },
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    wasTyping: false,
    unreadMessages: 0,
    messages: messageList

  },
  {
    id: 2,
    first_name: "Denis",
    last_name: "Cressar",
    email: "dcressar1@amazonaws.com",
    gender: "Bigender",
    ip_address: "199.214.126.227",
    avatar: "https://robohash.org/quiautblanditiis.png?size=50x50&set=set1",
    created: {
      date: "26 декабря 2023",
      time: "12:30",
    },
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
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
    created: {
      date: "26 декабря 2023",
      time: "12:30",
    },
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
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
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 5,
    first_name: "Ilyssa",
    last_name: "Jellett",
    email: "ijellett4@bravesites.com",
    gender: "Female",
    ip_address: "167.8.109.90",
    avatar: "https://robohash.org/velearumassumenda.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 6,
    first_name: "Bradan",
    last_name: "Corbould",
    email: "bcorbould5@unesco.org",
    gender: "Male",
    ip_address: "99.170.231.71",
    avatar: "https://robohash.org/ipsumquisquamaut.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 7,
    first_name: "Paco",
    last_name: "Rollo",
    email: "prollo6@tiny.cc",
    gender: "Male",
    ip_address: "72.44.226.190",
    avatar: "https://robohash.org/cumculpavoluptas.png?size=50x50&set=set1",
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 8,
    first_name: "Dario",
    last_name: "Southey",
    email: "dsouthey7@thetimes.co.uk",
    gender: "Male",
    ip_address: "82.104.3.160",
    avatar: "https://robohash.org/voluptatemnamqui.png?size=50x50&set=set1",
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 9,
    first_name: "Alon",
    last_name: "Woffenden",
    email: "awoffenden8@cisco.com",
    gender: "Male",
    ip_address: "36.92.37.8",
    avatar: "https://robohash.org/sequihicfuga.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 10,
    first_name: "Danette",
    last_name: "Richards",
    email: "drichards9@zdnet.com",
    gender: "Female",
    ip_address: "111.216.240.75",
    avatar: "https://robohash.org/placeatetdignissimos.png?size=50x50&set=set1",
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 11,
    first_name: "Dilly",
    last_name: "Jacox",
    email: "djacoxa@rambler.ru",
    gender: "Male",
    ip_address: "109.97.247.107",
    avatar: "https://robohash.org/natusodionostrum.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 12,
    first_name: "Debee",
    last_name: "Bumby",
    email: "dbumbyb@mozilla.com",
    gender: "Female",
    ip_address: "173.100.159.159",
    avatar: "https://robohash.org/cupiditateperspiciatisfugiat.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 13,
    first_name: "Ange",
    last_name: "Manuaud",
    email: "amanuaudc@hud.gov",
    gender: "Female",
    ip_address: "57.190.48.12",
    avatar: "https://robohash.org/rationedignissimosaut.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 14,
    first_name: "Gwenore",
    last_name: "Aimer",
    email: "gaimerd@wikipedia.org",
    gender: "Female",
    ip_address: "194.93.10.200",
    avatar: "https://robohash.org/voluptasquasicommodi.png?size=50x50&set=set1",
    online: {
      status: false,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },
  {
    id: 15,
    first_name: "Rosalyn",
    last_name: "Rameaux",
    email: "rrameauxe@godaddy.com",
    gender: "Female",
    ip_address: "175.100.149.239",
    avatar: "https://robohash.org/liberovoluptasvel.png?size=50x50&set=set1",
    online: {
      status: true,
      startTime: '11:45',
      endTime: '12:45'
    },
    isTyping: false,
    unreadMessages: 0, wasTyping: false,
    messages: messageList
  },

]
