import Button from 'react-bootstrap/Button'

const MyButton = ({color, text}) => {
    return (
        <Button variant={color}>{text}</Button>
    );
};

export default MyButton;