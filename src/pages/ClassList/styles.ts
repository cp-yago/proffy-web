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
  }

  .filters {
    display: flex;
    flex-direction: row;
    margin: -28px 25% 64px;
    justify-content: space-between;
    align-items: center;

    div {
      width: 32%;

      label {
        color: var(--color-text-in-primary);
      }
    }
  }

  main {
    margin: -16px 25% 64px;

    .class-container {
      margin-top: 32px;
      background: #FFFFFF;
      padding: 56px 0 0;
      border: 1px solid var(--color-line-in-white);
      border-radius: 8px;


      .class-header {
        padding: 0 64px;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 15%;
          border-radius: 50%;
          margin-right: 32px;
        }

        h1 {
          font-family: Archivo;
          font-size: 24px;
          line-height: 25px;
          color: var(--color-text-title);
        }

        p {
          font-size: 16px;
          line-height: 26px;
        }
      }

      p.user-bio {
        margin: 32px 0;
        padding: 0 64px;
      }

      .schedule-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 16px 0 32px;
        padding: 0 64px;

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

      footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: var(--color-box-footer);
        padding: 32px 64px;
        border: 1px solid var(--color-line-in-white);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        div.cost {
          display: flex;
          flex-direction: row;
          align-items: center;

          label{
            font-size: 14px;
            line-height: 20px;
          }

          p {
            font-family: Archivo;
            font-weight: bold;
            font-size: 20px;
            line-height: 26px;
            color: var(--color-primary);
            margin-left: 5%;
          }
        }

        button {
          width: 40%;
          margin: 0;
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
