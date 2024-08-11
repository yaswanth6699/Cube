import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 100px;
  width: 100%;
  background: #4b40ee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 32px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: #f6f5f5;
    overflow-y: scroll;
    height: calc(100vh - 130px);

    .placeholder {
      height: 40vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .img-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 20px;
      margin-top: 20px;

      img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    p {
      width: 70%;
      text-align: center;
    }
  }

  .sidebar {
    overflow-y: scroll;
    height: calc(100vh - 90px);
    border-right: 1px solid black;
    .user {
      cursor: pointer;
      padding: 10px 20px;
      border-bottom: 0.5px solid grey;
    }
    .selectedUser {
      background: #f6f5f5;
    }
  }
`;
