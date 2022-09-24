import './styles.css';
import {ClearIcon} from "assets/index";

function Form({searchValue, setSearchValue, submitHandle}) {
    return (<form className={'form-container'} onSubmit={event => submitHandle(event)}>
        <div className={'input'}>
            <input type="text"
                   value={searchValue}
                   placeholder={'Enter task'}
                   onChange={event => setSearchValue(event.target.value)}/>
            {!!value && <img src={ClearIcon}
                             alt="clear icon"
                             onClick={() => setSearchValue('')}
            />}
        </div>

        <button type="submit"> Add</button>
    </form>)
}

export default Form;