const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Abror",
      ava: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:131109?quality=0.8&format=jpg",
    },
    {
      id: 2,
      name: "Victoria",
      ava: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/18f7f0c4-e483-4cb8-a189-65072e680f52/300x450",
    },
    {
      id: 3,
      name: "Sveta",
      ava: "https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg",
    },
    {
      id: 4,
      name: "Bill",
      ava: "https://i.pinimg.com/originals/6d/35/d8/6d35d834fe1b42b4d85c91e4ddea52ff.jpg",
    },
    {
      id: 5,
      name: "Mark",
      ava: "https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg",
    },
    {
      id: 6,
      name: "Steve",
      ava: "http://images.unsplash.com/photo-1509079629765-8c81a0dfe49b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Whats going on" },
    { id: 3, message: "WTF!!!" },
    { id: 4, message: "Go!!!" },
    { id: 5, message: "FaceToFace!!!" },
    { id: 6, message: "Loser!!!" },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      };

    default:
      return state;
  }

  return state;
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
