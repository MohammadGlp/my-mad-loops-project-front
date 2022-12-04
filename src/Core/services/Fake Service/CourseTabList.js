import { v4 as uuidv4 } from 'uuid';
import faq from '../../../Assets/faq.png';
import faqDisabled from '../../../Assets/faq-dis.png';
import chatDisable from '../../../Assets/chat-dis.png';
import chat from '../../../Assets/chat.png';
const Data = [
  {
    id: 1,
    title: 'سوالات متداول',
    activeImg: faq,
    inactiveImg: faqDisabled,
    active: true,
    activeIcon: faq,
    inactiveIcon: faqDisabled,
  },
  {
    id: 2,
    title: 'نظرات',
    activeImg: chat,
    inactiveImg: chatDisable,
    active: false,
    activeIcon: chat,
    inactiveIcon: chatDisable,
  },
];

export default Data;
