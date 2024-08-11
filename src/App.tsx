import { useMemo, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container, ContentWrapper } from "./styles/Wrapper";
import { UserTypes } from "./types";
import { generateRandomUsersList } from "./utils";

function App() {
  const usersList: UserTypes[] = useMemo(() => generateRandomUsersList(), []);
  const [selectedUser, toggleSelectedUser] = useState<UserTypes>(usersList[0]);
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Sidebar
          userList={usersList}
          selectedUser={selectedUser}
          toggleSelectedUser={toggleSelectedUser}
        />
        <Content selectedUser={selectedUser} />
      </ContentWrapper>
    </Container>
  );
}

export default App;
