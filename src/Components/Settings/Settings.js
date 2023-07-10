import React from 'react'
import './settings.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Editprofile from './EditProfile/Editprofile';
import ChangePassword from './ChangePassword/ChangePassword';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}




export default function Settings() {
      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section id='settings'>
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width:"15%"
        }}
      >
        <Tab label="Edit Profile" {...a11yProps(0)}
         sx={{fontSize:"14px",
                textTransform:"none",
                fontWeight:"900",
                fontFamily:"monospace"
            }}/>
        <Tab label="Change Password" {...a11yProps(1)} 
        sx={{fontSize:"14px",
            textTransform:"none",
            fontWeight:"900",
            fontFamily:"monospace"
        }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Editprofile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
    </Box>
    </section>
  )
}
