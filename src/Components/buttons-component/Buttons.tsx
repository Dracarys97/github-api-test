
import { useRouter } from 'next/router';
import { Button } from './button/Button';

function Buttons() {
    const router = useRouter()
    function handleUsers(){
        router.push("/users")
    }
    function handleRepositories(){
        router.push("/repositories")
    }
    return (
        <div className='buttons'>
            <Button  className='buttons__button' onClick={handleUsers}>Users</Button>
            <Button  className='buttons__button' onClick={handleRepositories}>Repositories</Button>
        </div>
    );
}

export default Buttons;
