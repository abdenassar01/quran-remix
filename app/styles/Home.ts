import { MAINCOLOR } from '~/utils/colors';
import styled from "styled-components";

export const PageWrapper = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CentredContent = styled("main")`
    width: 90%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`

export const HeadContent = styled("section")`
    padding-top: 100px;
`

export const Heading = styled("h2")`
    color: ${MAINCOLOR};
    font-size: 30px;
`