import styled from "styled-components"

const $Product = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f2f2;
  background: #fff;
  color: #333;
  width: 100%;

  > .top {
    padding: 8px;
    display: flex;
    height: 128px;
    width: 100%;

    img {
      max-width: 104px;
    }
  }

  > .bottom {
    padding: 4px;
    display: flex;
    justify-content: flex-end;

    > div {
      margin-left: 24px;
    }
  }
`

export default $Product
