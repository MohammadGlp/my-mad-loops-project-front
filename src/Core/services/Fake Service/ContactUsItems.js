import { v4 as uuidv4 } from 'uuid';
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';
const Data = [
  {
    id: uuidv4(),
    icon: <BsTelephoneFill className="switchItems-icon" />,
    title: 'تلفن تماس',
    path: '/contactUs',
  },
  {
    id: uuidv4(),
    icon: <BsEnvelopeFill className="switchItems-icon" />,
    title: 'ارسال پیام',
    path: '/contactUs/message',
  },
  {
    id: uuidv4(),
    icon: <BsGeoAltFill className="switchItems-icon" />,
    title: 'مکان پژوهشگاه',
    path: '/contactUs/location',
  },
];

export default Data;
