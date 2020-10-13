import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Archivo;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .intro-container {
    flex: 1;
    max-height: 360px;
    width: 100%;
    background: var(--color-primary);
    padding: 0 25% 96px;


    h1 {
      color: var(--color-title-in-primary);
      font-size: 38px;
      line-height: 40px;
      padding-top: 64px;
      margin-bottom: 24px;
    }

    span {
      color: var(--color-line-in-white);
      font-size: 16px;
      line-height: 26px;
    }
  }

  main {
    margin: -64px 25% 64px;

    background: #FFFFFF;
    padding: 56px 64px;
    border: 1px solid var(--color-line-in-white);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h1 {
        color: var(--color-text-title);
      }

      a {
        color: var(--color-primary);
        font: 600 1.6rem Archivo;
        transition: opacity 0.1s;
        text-decoration: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .class-container {
      margin-top: 32px;

      .class-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .class-info {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-right: 35%;
        }

        .class-info-item {
          display: table-column;

          label {
          color: var(--color-text-complement);
          }

          p {
            color: var(--color-primary);
          }
        }

        button {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: 0;
          color: #e33d3d;
          text-decoration: none;
          cursor: pointer;
          font: 500 1.6rem Archivo;

          transition: opacity 0.1s;

          &:hover {
            opacity: 0.8;
          }
        }
      }

      .schedule-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 16px 0 32px;

        .schedule-item {
          border-radius: 8px;
          display: column;
          background: var(--color-background);
          font-size: 12px;
          width: 18%;
          padding: 2%;

          span {
            color: var(--color-text-complement);
          }

          p {
            font-family: Archivo;
            color: #6A6180;
            font-weight: bold;
          }

          p:first-of-type {
            margin-bottom: 16px
          }
        }
      }
    }
  }
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e6f0;
  margin: 10px 0;
`;

export const Header = styled.header`
  height: 60px;
  background: var(--color-primary-dark);
  padding: 16px 15%;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: var(--color-text-in-primary);
    margin: 0 auto;
  }
`;

export const GobackIcon = styled.img`
`;
