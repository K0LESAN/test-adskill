import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { Home } from '@/pages/home';
import { store } from './store';
import { theme } from './theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};
