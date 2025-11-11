import {AuthContainer} from "../ui/AuthContainer";
import {TextField} from '../ui/TextField';

export function RenderLogin() {
    return(
        <AuthContainer 
            title="Bem-vindo de volta!"
            subtitle="Faça login para continuar!"
            icon="hotel">

        <TextField
            label="Email"
            icon="email">
        </TextField>

        </AuthContainer>
    );
}