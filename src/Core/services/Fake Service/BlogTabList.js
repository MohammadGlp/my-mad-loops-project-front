import { v4 as uuidv4 } from 'uuid';
import chatDisable from '../../../Assets/chat-dis.png';
import chat from '../../../Assets/chat.png';
const Data = [
  {
    id: uuidv4(),
    title: 'نظرات',
    activeImg: chat,
    inactiveImg: chatDisable,
    active: true,
    activeIcon: chat,
    inactiveIcon: chatDisable,
  },
];

export default Data;
