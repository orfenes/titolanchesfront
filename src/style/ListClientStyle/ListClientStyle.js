import styled from 'styled-components';

const ListClientStyle = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;

  .item-client {
    padding-bottom 15px;
    border-bottom 1px solid #000;
  }

  .wrapper-info-client {
    margin-bottom: 15px;

    .name-client {
      margin: 8px auto;
      font-size: 16px;
    }

    .info-client {
      margin: 8px auto;
      font-size: 14px;
    }
  }

  .wrapper-buttons {
    display: flex;
    justify-content: flex-end;

    .bt {
      margin-right: 10px;
    }
  }
`;

export default ListClientStyle;
export { ListClientStyle };
