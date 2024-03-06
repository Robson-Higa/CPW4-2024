import { HeaderContainer, HeaderTitle } from "./styles";

type Props = {

    title: string
}

const Header = ({title}:Props) => {
    return(
        <HeaderContainer>
            <HeaderTitle data-cy='reader-title'>{title}</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;