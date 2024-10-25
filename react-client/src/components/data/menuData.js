import { FaProjectDiagram, FaFileAlt, FaClipboardList, FaCog, FaSearch } from 'react-icons/fa';

// 좌측 메뉴바 데이터
export const menuData = [
  { id: 1, label: '캡스톤 프로젝트', icon: <FaProjectDiagram />, route: '/' },
  { id: 2, label: '제안서', icon: <FaFileAlt />, route: '/proposal' },
  { id: 3, label: '기획서', icon: <FaClipboardList />, route: '/plan' },
  { id: 4, label: '설계서', icon: <FaCog />, route: '/design' },
  { id: 5, label: '결과 보고서', icon: <FaSearch />, route: '/report' }
];

// 내용 안에 상단 Tabs 데이터
export const tabs = [
  { name: '주요 내용', count: 10},
  { name: '제출', count: 5 },
  { name: '공지사항', count: 5 },
];


