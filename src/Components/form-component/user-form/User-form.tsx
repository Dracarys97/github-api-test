import { useState } from "react";
import { Button } from "../../buttons-component/button/Button";

function UserForm(props:any){
    const handleSearch = props.searchFunc;
    const [searchValue, setSearchValue] = useState<string>("");
    const handleSubmit = (event:any) => {
        event.preventDefault();
        handleSearch(searchValue)
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <div className="form__container__label">
                    Please type the user you want to search
                </div>
                <input id="user-input" type="text" className="form-control form__container__input" required placeholder="Username" value ={searchValue} onChange = {e => setSearchValue(e.target.value)}>
                </input>
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </form>
    )
}
export default UserForm;