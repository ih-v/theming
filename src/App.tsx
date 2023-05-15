import { MouseEvent, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import * as themes from "./components/styles/Theme";
import { GlobalStyles } from "./components/styles/Global";
import { Header } from "./components/styles/Header.styled";
import { Footer } from "./components/styles/Footer.styled";
import { CardsContainer } from "./components/styles/CardsContainer.styled";
import { Card, CardBody, CardTitle } from "./components/styles/Card.styled";
import {
  ThemeButton,
  ThemeContainer,
} from "./components/styles/ThemeSwitching.styled";

type PostType = {
  title: string;
  body: string;
};

type ThemeStateType = keyof typeof themes;

const getTheme = () => {
  const currentTheme = localStorage.getItem("current-theme") as ThemeStateType;
  if (currentTheme) {
    return currentTheme;
  }
  return "light";
};

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [theme, setTheme] = useState<ThemeStateType>(getTheme);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?limit=10")
      .then((response) => response.json())
      .then((json: PostType[]) =>
        setPosts(() => {
          return json
            .slice(0, 10)
            .map((item) => ({ title: item.title, body: item.body }));
        })
      );
  }, []);

  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const currentTheme = (e.target as HTMLButtonElement).name as ThemeStateType;
    if (currentTheme) {
      setTheme(currentTheme);
      localStorage.setItem("current-theme", currentTheme);
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header>THEME SWITCHER (based on styled-components)</Header>
      <ThemeContainer>
        <span>Themes: </span>
        <ThemeButton
          name="light"
          className={`light ${theme === "light" ? "active" : ""}`}
          onClick={toggleTheme}
        />
        <ThemeButton
          name="dark"
          className={`dark ${theme === "dark" ? "active" : ""}`}
          onClick={toggleTheme}
        />
        <ThemeButton
          name="blue"
          className={`blue ${theme === "blue" ? "active" : ""}`}
          onClick={toggleTheme}
        />
        <ThemeButton
          name="green"
          className={`green ${theme === "green" ? "active" : ""}`}
          onClick={toggleTheme}
        />
        <ThemeButton
          name="brown"
          className={`brown ${theme === "brown" ? "active" : ""}`}
          onClick={toggleTheme}
        />
        <ThemeButton
          name="pink"
          className={`pink ${theme === "pink" ? "active" : ""}`}
          onClick={toggleTheme}
        />
      </ThemeContainer>
      <CardsContainer>
        {posts.map((item, i) => (
          <Card key={i}>
            <CardTitle>{item.title}</CardTitle>
            <CardBody>{item.body}</CardBody>
          </Card>
        ))}
      </CardsContainer>
      <Footer>
        <p>
          with help of{" "}
          <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a>
        </p>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
