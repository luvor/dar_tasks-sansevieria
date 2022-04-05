import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { basename } from "./assets/vars";
import SideBar from "./components/sideBar/SideBar";

import { ThemeContext } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import IndexPage from "./pages/indexPage/IndexPage";
import LoginPage from "./pages/loginPage/LoginPage";
import MoviesAll from "./pages/moviesAll/MoviesAll";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Settings from "./pages/settings/Settings";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Wrapper>
            <SideBar />
            <MainContent>
              <Routes>
                <Route path={basename + "/settings"} element={<Settings />} />
                <Route
                  path={basename + "/movies/all"}
                  element={<MoviesAll />}
                />
                <Route path={basename + "/profile"} element={<ProfilePage />} />
                <Route path={basename + "/login"} element={<LoginPage />} />
                <Route path={basename + "/"} element={<IndexPage />} />
              </Routes>
            </MainContent>
          </Wrapper>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  padding: 20px;
  width: 100%;
`;

export default App;
