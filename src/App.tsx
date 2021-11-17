
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Edit } from './Pages/Edit';
import { Feed } from './Pages/Feed';
import { Lermais } from './Pages/Lermais';
import { Post } from './Pages/Post';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/post" component={Post} />
            <Route path="/lermais/:id" component={Lermais} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
