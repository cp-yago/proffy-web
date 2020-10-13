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

      .class-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;

        div {
            width: 62.5%;
          & + div {
            width: 35%;
          }
        }
      }

      .class-schedule {
        margin-top: 64px;

        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          button {
            display: flex;
            background-color: transparent;
            border: 0;
            color: var(--color-primary);
            text-decoration: none;
            cursor: pointer;
            font: 600 1.6rem Archivo;

            transition: opacity 0.1s;

            &:hover {
              opacity: 0.8;
            }
          }
        }

        .class-schedule-content {
          display: flex;
          flex-direction: column;

          .class-schedule-item {
            display: flex;
            flex-direction: column;
            margin-bottom: 32px;

            .info {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              margin-top: 32px;

              div {
                width: 22.5%;
              }

              div:first-child {
                width: 50%;
              }
            }

            .delete-schedule-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 24px;

              button {
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: 0;
                color: #E33D3D;
                text-decoration: none;
                cursor: pointer;
                font: 600 1.6rem Archivo;

                transition: opacity 0.1s;

                &:hover {
                  opacity: 0.8;
                }
              }

              .divider {
                width: 30%;
                height: 1px;
                background: #e6e6f0;
              }
            }
          }
        }
      }

      .no-schedule-registered {
        margin: auto;
        text-align: center;
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
