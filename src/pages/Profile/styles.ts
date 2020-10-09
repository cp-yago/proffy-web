import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .intro-container {
    flex: 1;
    width: 100%;
    background: var(--color-primary);
    padding: 0 25% 96px;


    h1 {
      color: var(--color-title-in-primary);
      font-family: Archivo;
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

  form {
    margin: -64px 25% 64px;

    main {
      background: #FFFFFF;
      padding: 56px 64px;
      border: 1px solid var(--color-line-in-white);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      h1 {
        font-family: Archivo;
        color: var(--color-text-title);
      }

      .user-data {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 32px 0;

        .user-data-main {
          flex-direction: column;
          margin-left: 40px;

          div {
            margin-bottom: 16px;
          }
        }
      }
    }

    footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: var(--color-box-footer);
      padding: 56px 64px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      div {
        display: flex;
        flex-direction: row;

        img {
          margin-right: 16px;
        }

        p {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          color: var(--color-primary-light);

          span {
            color: var(--color-text-complement);
          }
        }
      }

      button {
        width: 200px;
        margin: 0;
      }
    }
  }

  @media(max-width: 1000px) {

    .intro-container {
    padding: 0 10% 80px;
    }

    form {
      margin: -48px 10% 64px;
      text-align: center;

      main {
        padding: 32px 10%;

        .user-data {
          flex-direction: column;

          margin-top: 32px;

          .user-data-main {
            margin-left: 0;

            div {
              margin-bottom: 0;
              margin-top: 32px;
            }
          }
        }
      }

      footer {
        flex-direction: column;

        div {
          text-align: left;
        }

        button {
          margin-top: 32px;
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

export const Avatar = styled.div`
  img {
    width: 200px;
    border-radius: 50%;

    @media(max-width: 1000px) {
      width: 15rem;
    }
  }
`;
