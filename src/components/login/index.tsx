import AuthContainer from "../ui/AuthContainer";
import TextField from '../ui/TextField';

const RenderLogin = () => {
    return(
        <AuthContainer 
            title="Bem-vindo de volta!"
            subtitle="Faça login para continuar!"
            icon="hotel">

        <TextField
            label="E-mail"
            icon="email">
        </TextField>

        </AuthContainer>
    );
}

export default RenderLogin;