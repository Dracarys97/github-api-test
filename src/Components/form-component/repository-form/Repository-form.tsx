import {  useState } from "react";
import { Button } from "../../buttons-component/button/Button";
import './Repository-form.scss';
function RepositoryForm(props:any){
    const handleSearch = props.searchFunc;
    const [searchUser, setSearchUser] = useState<string>("");
    const [searchRepository, setSearchRepository] = useState<string>("");
    const [ownerType, setOwnerType] = useState<boolean>(false);
    const handleSubmit = (event:any) => {
        event.preventDefault();
        handleSearch(searchUser,ownerType,searchRepository)
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <div className="form__container__user">
                    <div className="flex-horizontal">
                        <div className="form__container__label">
                            Please type the user owner of the repositories you want to search
                        </div>
                        <input type="text" className="form-control form__container__input" required placeholder="Username" value ={searchUser} onChange = {e => setSearchUser(e.target.value)}>
                        </input>
                        
                    </div>
                    <div className="flex-horizontal form-check">
                        <div className="form__container__label">
                            Is an organization?
                        </div>
                        <input type="checkbox" className="form-check-input" checked={ownerType} onChange = {e => setOwnerType(e.target.checked)}></input>
                    </div>
                </div>
                <div className="form__container__label">
                    Please type the name of the repository you want to search (If needed)
                </div>
                <input type="text" className="form-control form__container__input" placeholder="Repository" value ={searchRepository} onChange = {e => setSearchRepository(e.target.value)}>
                </input>
                
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </form>
    )
}
export default RepositoryForm;