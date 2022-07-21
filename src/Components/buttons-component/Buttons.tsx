import './Buttons.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button } from './button/Button';

function Buttons() {
    let navigate:NavigateFunction = useNavigate();
    function handleUsers(){
        navigate("/users",{replace:true});
    }
    function handleRepositories(){
        navigate("/repositories",{replace:true});
    }
    return (
        <div className='buttons'>
            <Button  className='buttons__button' onClick={handleUsers}>Users</Button>
            <Button  className='buttons__button' onClick={handleRepositories}>Repositories</Button>
        </div>
    );
}

export default Buttons;
