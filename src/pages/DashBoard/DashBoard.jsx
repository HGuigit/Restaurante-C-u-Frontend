import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import HomeIcon from '@mui/icons-material/Home';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LoginIcon from '@mui/icons-material/Login';

import { useNavigate } from 'react-router-dom';

// -------------------------------------------------------

import LoginForm from '../../components/LoginForm';
import FormularioCadastroComanda from '../../components/FormularioCadastroComanda';
import FormularioCadastroFuncionario from '../../components/FormularioCadastroFuncionario';
import FormularioCadastroIngrediente from '../../components/FormularioCadastroIngrediente';
import FormularioCadastroReceita from '../../components/FormularioCadastroReceita';
import FormularioCadastroPedidos from '../../components/FormularioCadastroPedidos';

const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft() {

  const nav = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // --------------------------------------- //

  const [state, setState] = React.useState(<React.Fragment />);

  // --------------------------------------- //

  const handleCadastroComanda = () => {
    setState(<FormularioCadastroComanda />);
    //console.log("Cadastro comanda");
  };

  const handleCadastroFuncionario = () => {
    setState(<FormularioCadastroFuncionario />);
    //console.log("Cadastro funcionário");
  };

  const handleCadastroIngrediente = () => {
    setState(<FormularioCadastroIngrediente />);
    //console.log("Cadastro ingrediente");
  };

  const handleCadastroReceita = () => {
    setState(<FormularioCadastroReceita />);
    //console.log("Cadastro receita");
  };

  const handleCadastroPedidos = () => {
    setState(<FormularioCadastroPedidos />);
    //console.log("Cadastro pedidos");
  };

  const handleLogin = () => {
    setState(<LoginForm />);
    //console.log("login");
  };

  const handleHome = () => {
    nav('/');
  };

  const handler = [handleCadastroComanda, handleCadastroFuncionario, handleCadastroIngrediente, handleCadastroReceita, handleCadastroPedidos];
  const handler2 = [handleLogin, handleHome];

  const listIcons1 = [<AddToHomeScreenIcon />, <PersonAddIcon />, <RestaurantIcon />, <ReceiptIcon />, <FoodBankIcon />];
  const listIcons2 = [<LoginIcon /> , <HomeIcon />];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <LocalDiningIcon sx={{fontSize:'inherit', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Cadastrar Comanda', 'Cadastrar Funcionário', 'Cadastrar Ingrediente', 'Cadastrar Receita', 'Cadastrar Pedido'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handler[index]}>
                <ListItemIcon>
                  { listIcons1[index] }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Login', 'Home'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handler2[index]}>
                <ListItemIcon>
                  { listIcons2[index] }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
            { state }
      </Main>
    </Box>
  );
}
