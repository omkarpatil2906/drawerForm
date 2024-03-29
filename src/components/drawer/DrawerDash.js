import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FeedbackForm from '../rightcolumn/form/FeedbackForm';
import { FaHome } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { Routes, Route } from 'react-router-dom'
import Consultant from '../rightcolumn/form/Consultant';
import Staff from '../rightcolumn/form/Staff';
import Patient from '../rightcolumn/form/Patient';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import DashBoard from '../rightcolumn/dashboard/DashBoard';
import { useNavigate } from 'react-router-dom'
import { MdOutlineAnalytics } from "react-icons/md";
import QuestionTemp from '../rightcolumn/form/QuestionTemp';
import ManageConsultation from '../rightcolumn/task/ManageConsultation';
import { LuCalendarCheck2 } from "react-icons/lu";
import Doctor from '../rightcolumn/doctor/Doctor';
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import Schedule from '../rightcolumn/doctorSchedule/Schedule';
import PatientList from '../rightcolumn/patient/PatientList';
import AddPatinet from '../rightcolumn/patient/AddPatient';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#3F2860' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }), }} >
            <RiMenu2Fill />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FaCircleArrowLeft /> : <FaCircleArrowLeft className="text-[#3F2860]" />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => navigate("/")} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <MdOutlineDashboardCustomize size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] ' />
            </ListItemButton>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => navigate("/home")}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <FaHome size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Home " sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' />
            </ListItemButton>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <MdOutlineAnalytics size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' onClick={() => navigate("/analytics")} />
            </ListItemButton>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <LuCalendarCheck2 size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Appointment" sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' onClick={() => navigate("/appointment")} />
            </ListItemButton>

            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <FaUserDoctor size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Doctors" sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' onClick={() => navigate("/doctor")} />
            </ListItemButton>

            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <LuCalendarCheck2 size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Patient " sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' onClick={() => navigate("/patient")} />
            </ListItemButton>

            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                <AiFillSchedule size={25} className="text-[#3F2860]" />
              </ListItemIcon>
              <ListItemText primary="Doctor Schedule" sx={{ opacity: open ? 1 : 0 }} className='text-[#3F2860] font-bold' onClick={() => navigate("/schedule")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, }}>
        <DrawerHeader />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path="/home" element={<FeedbackForm />} >
            <Route path='consultant' element={<Consultant />} />
            <Route path="staff" element={<Staff />} />
            <Route path="patient" element={<Patient />} />
          </Route>
          <Route path='/temp' element={<QuestionTemp />} />
          <Route path='/appointment' element={<ManageConsultation />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/patient' element={<PatientList />}/>
          <Route path='/add_patient' element={<AddPatinet/>}/>
          
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </Box>
    </Box>
  );
}
