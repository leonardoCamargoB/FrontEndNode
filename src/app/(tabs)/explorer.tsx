import RenderExplore from '@/components/explore';
import AuthContainer from '@/components/ui/AuthContainer';

const explorer = () => {
    return( 
    <AuthContainer>
        <RenderExplore/>
    </AuthContainer>
    );
}
export default explorer;