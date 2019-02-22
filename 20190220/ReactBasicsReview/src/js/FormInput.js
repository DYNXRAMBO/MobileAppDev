class Form extends React.Component {
    state = {
        EmailInput: "",
        PasswordInput: ""
    }
    render() {
        return (
            <form >
                <EmailInput />
                <PasswordInput />
            </form>
        );
    }
}