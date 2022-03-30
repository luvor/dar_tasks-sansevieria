import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import SideBar from "./components/sideBar/SideBar";

import { ThemeContext, ThemeHandlerProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import IndexPage from "./pages/indexPage/IndexPage";
import MoviesAll from "./pages/moviesAll/MoviesAll";
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
                <Route path="/settings" element={<Settings />} />
                <Route path="/movies/all" element={<MoviesAll />} />
                <Route path="/" element={<IndexPage />} />
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
