import { Container, Value, Text } from './styles';
import { MdDonutSmall } from 'react-icons/md'
export const GraphItem = (props) => {
    return (
        <Container>
            <MdDonutSmall color={props.color} />
            <Value>{props.value}</Value>
            <Text>{props.text}</Text>
        </Container>
    )
}

export default GraphItem;