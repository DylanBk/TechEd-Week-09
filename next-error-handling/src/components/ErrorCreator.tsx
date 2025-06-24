type Props = {
    reset: () => void
};

const ErrorCreator = (props: Props) => {
    throw new Error('i have no idea how to fix this error'), {reset: props.reset};

    return (
        <div>Error Creator</div>
    );
};

export default ErrorCreator;